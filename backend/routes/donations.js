const express = require("express");
const {
	createDonation,
	getDonations,
	getDonation,
	deleteDonation,
	updateDonation,
	getDonationsByUser,
} = require("../controllers/donationController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all donation routes
router.use(requireAuth);

// GET all donations
router.get("/", getDonations);

router.get("/per-user", getDonationsByUser);

//GET a single donation
router.get("/:id", getDonation);

// POST a new donation
router.post("/", createDonation);

// DELETE a donation
router.delete("/:id", deleteDonation);

// UPDATE a donation
router.patch("/:id", updateDonation);

module.exports = router;
