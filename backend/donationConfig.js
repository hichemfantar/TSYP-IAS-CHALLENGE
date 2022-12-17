const DONATION_ADDRESS = "0x3C53873E9f1C72fc601Eb58F6B7ae27E53c7efdf";

const DONATION_ABI = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		name: "donors",
		outputs: [
			{
				internalType: "bytes32",
				name: "name",
				type: "bytes32",
			},
			{
				internalType: "uint256",
				name: "donatedAmount",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
		constant: true,
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "donationAmount",
				type: "uint256",
			},
		],
		name: "donate",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "getTotalDonations",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
		constant: true,
	},
];

module.exports = {
	DONATION_ABI: DONATION_ABI,
	DONATION_ADDRESS: DONATION_ADDRESS,
};
