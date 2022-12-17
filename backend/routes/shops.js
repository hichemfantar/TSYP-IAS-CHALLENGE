const express = require("express");
const {
	createShop,
	getShops,
	getShop,
	deleteShop,
	updateShop,
} = require("../controllers/shopController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all donation routes
router.use(requireAuth);

// GET all donations
router.get("/", getShops);

//GET a single donation
router.get("/:id", getShop);

// POST a new donation
router.post("/", createShop);

// DELETE a donation
router.delete("/:id", deleteShop);

// UPDATE a donation
router.patch("/:id", updateShop);

module.exports = router;
