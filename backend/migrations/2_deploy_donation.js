const Donation = artifacts.require("./Donation.sol");

module.exports = function (deployer) {
	// deployer.deploy({
	// 	data: Donation,
	// 	arguments: ["isie", "president", "election"],
	// });
	deployer.deploy(Donation);
};
