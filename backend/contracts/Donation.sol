// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/// @title Donation.
contract Donation {
	// This declares a new complex type which will
	// be used for variables later.
	// It will represent a single donor.
	struct Donor {
		bytes32 name; // short name (up to 32 bytes)
		uint256 donatedAmount; // donation amount
	}

	uint256 totalDonations = 0; // total donation amount

	// This declares a state variable that
	// stores a `Donor` struct for each possible address.
	mapping(address => Donor) public donors;

	constructor() {}

	function donate(uint256 donationAmount) external {
		Donor storage sender = donors[msg.sender];
		sender.donatedAmount = sender.donatedAmount + donationAmount;
		totalDonations = totalDonations + donationAmount;
	}

	/// @dev return the total domation amount.
	function getTotalDonations() public view returns (uint256) {
		return totalDonations;
	}
}
