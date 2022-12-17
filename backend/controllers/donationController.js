const donationModel = require("../models/donationModel");
const mongoose = require("mongoose");
const { DONATION_ABI, DONATION_ADDRESS } = require("../donationConfig");
const Web3 = require("web3");
const userModel = require("../models/userModel");

if (typeof web3 !== "undefined") {
	var web3 = new Web3(web3.currentProvider);
} else {
	var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}

// get all donations
const getDonationsByUser = async (req, res) => {
	const user_id = req.user._id;

	const donations = await donationModel
		.find({ user_id })
		.sort({ createdAt: -1 })
		.populate("donor");

	// const donations = await userModel.find({ user_id }).populate("donations");

	const accounts = await web3.eth.getAccounts();
	const donationList = new web3.eth.Contract(DONATION_ABI, DONATION_ADDRESS);

	const totalDonations = await donationList.methods
		.getTotalDonations()
		.call({ from: accounts[parseInt(0)] });
	console.log(totalDonations);

	res.status(200).json(donations);
};

const getDonations = async (req, res) => {
	const accounts = await web3.eth.getAccounts();
	const donationList = new web3.eth.Contract(DONATION_ABI, DONATION_ADDRESS);

	const totalDonations = await donationList.methods
		.getTotalDonations()
		.call({ from: accounts[parseInt(0)] });
	console.log(totalDonations);
	res.status(200).json(totalDonations);
};

// get a single donation
const getDonation = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such donation" });
	}

	const donation = await donationModel.findById(id);

	if (!donation) {
		return res.status(404).json({ error: "No such donation" });
	}

	res.status(200).json(donation);
};

// create new donation
const createDonation = async (req, res) => {
	const { note, amount } = req.body;

	let emptyFields = [];

	// if (!note) {
	// 	emptyFields.push("note");
	// }
	if (!amount) {
		emptyFields.push("amount");
	}
	if (emptyFields.length > 0) {
		return res
			.status(400)
			.json({ error: "Please fill in all the fields", emptyFields });
	}

	// add doc to db
	try {
		const user_id = req.user._id;
		const donation = await donationModel.create({
			note,
			amount,
			user_id,
			donor: user_id,
		});

		const accounts = await web3.eth.getAccounts();
		const donationList = new web3.eth.Contract(DONATION_ABI, DONATION_ADDRESS);
		await donationList.methods
			.donate(parseInt(amount))
			.send({ from: accounts[0] });

		res.status(200).json(donation);
	} catch (error) {
		console.log(error);
		res.status(400).json({ error: error.message });
	}
};

// delete a donation
const deleteDonation = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such donation" });
	}

	const donation = await donationModel.findOneAndDelete({ _id: id });

	if (!donation) {
		return res.status(400).json({ error: "No such donation" });
	}

	res.status(200).json(donation);
};

// update a donation
const updateDonation = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such donation" });
	}

	const donation = await donationModel.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!donation) {
		return res.status(400).json({ error: "No such donation" });
	}

	res.status(200).json(donation);
};

module.exports = {
	getDonationsByUser,
	getDonations,
	getDonation,
	createDonation,
	deleteDonation,
	updateDonation,
};
