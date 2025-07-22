import express from "express";
import RecordsController from "../controllers/recordsController.js";

const router = express.Router();
const recordsController = new RecordsController();

router.post("/submit", recordsController.submitRecord.bind(recordsController));
router.get("/fetch", recordsController.fetchRecords.bind(recordsController));

export default router;
