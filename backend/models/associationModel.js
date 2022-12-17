const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const associationSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		contactNumber: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Association", associationSchema);
