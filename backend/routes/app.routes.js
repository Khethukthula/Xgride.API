import express from "express";
import { 
    createApplication,
    getApplications,
    getApplicationById,
    updateApplication,
    deleteApplication 
} from '../controllers/application.controller.js' // Adjust the path as necessary

const router = express.Router();

// Create a new application
router.post("/", createApplication);

// Get all applications
router.get("/", getApplications);

// Get a specific application by ID
router.get("/:id", getApplicationById);

// Update an application by ID
router.put("/:id", updateApplication);

// Delete an application by ID
router.delete("/:id", deleteApplication);

export default router;
