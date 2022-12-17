const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const donationSchema = new Schema(
	{
		note: {
			type: String,
		},
		amount: {
			type: Number,
			required: true,
		},
		user_id: {
			type: String,
			required: true,
		},
		donor: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Donation", donationSchema);
