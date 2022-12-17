const mongoose = require("mongoose");
const { DONATION_ABI, DONATION_ADDRESS } = require("../donationConfig");
const Web3 = require("web3");
const userModel = require("../models/userModel");
const shopModel = require("../models/shopModel");

if (typeof web3 !== "undefined") {
	var web3 = new Web3(web3.currentProvider);
} else {
	var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}

// get all donations
const getShops = async (req, res) => {
	const donations = await shopModel.find().sort({ createdAt: -1 });

	// const donations = await userModel.find({ user_id }).populate("donations");

	res.status(200).json(donations);
};

// get a single donation
const getShop = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such donation" });
	}

	const donation = await shopModel.findById(id);

	if (!donation) {
		return res.status(404).json({ error: "No such donation" });
	}

	res.status(200).json(donation);
};

// create new donation
const createShop = async (req, res) => {
	const { title, address, contactNumber } = req.body;

	// add doc to db
	try {
		const donation = await shopModel.create({
			title,
			address,
			contactNumber,
		});

		res.status(200).json(donation);
	} catch (error) {
		console.log(error);
		res.status(400).json({ error: error.message });
	}
};

// delete a donation
const deleteShop = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such donation" });
	}

	const donation = await shopModel.findOneAndDelete({ _id: id });

	if (!donation) {
		return res.status(400).json({ error: "No such donation" });
	}

	res.status(200).json(donation);
};

// update a donation
const updateShop = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such donation" });
	}

	const donation = await shopModel.findOneAndUpdate(
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
	getShops,
	getShop,
	createShop,
	deleteShop,
	updateShop,
};
