require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Web3 = require("web3");
const { DONATION_ABI, DONATION_ADDRESS } = require("./donationConfig");
const donationRoutes = require("./routes/donations");
const shopRoutes = require("./routes/shops");
const userRoutes = require("./routes/user");
const associationRoutes = require("./routes/associations");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// if (typeof web3 !== "undefined") {
// 	var web3 = new Web3(web3.currentProvider);
// } else {
// 	var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
// }

// routes
// app.use("/api/shops", shopRoutes);
// app.use("/api/donations", donationRoutes);
app.use("/api/user", userRoutes);
// app.use("/api/associations", associationRoutes);

// connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(async () => {
		// const accounts = await web3.eth.getAccounts();
		// console.log(accounts);
		// const donationList = new web3.eth.Contract(DONATION_ABI, DONATION_ADDRESS);
		// console.log(donationList);

		// listen for requests
		app.listen(process.env.PORT, () => {
			console.log("connected to db & listening on port", process.env.PORT);
		});
	})
	.catch((error) => {
		console.log(error);
	});
