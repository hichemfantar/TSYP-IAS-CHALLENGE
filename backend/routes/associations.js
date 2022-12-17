const express = require("express");
const {
	createAssociation,
	getAssociations,
	getAssociation,
	deleteAssociation,
	updateAssociation,
} = require("../controllers/associationController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all donation routes
router.use(requireAuth);

// GET all donations
router.get("/", getAssociations);

//GET a single donation
router.get("/:id", getAssociation);

// POST a new donation
router.post("/", createAssociation);

// DELETE a donation
router.delete("/:id", deleteAssociation);

// UPDATE a donation
router.patch("/:id", updateAssociation);

module.exports = router;
