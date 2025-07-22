import Record from "../models/record.js";

class RecordsController {
  async submitRecord(req, res) {
    try {
      const { bikeId, ownerName, dateStolen, description } = req.body;
      const newRecord = new Record({
        bikeId,
        ownerName,
        dateStolen,
        description,
      });
      await newRecord.save();
      res
        .status(201)
        .json({ message: "Record submitted successfully", record: newRecord });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error submitting record", error: error.message });
    }
  }

  async fetchRecords(req, res) {
    try {
      const records = await Record.find();
      res.status(200).json(records);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching records", error: error.message });
    }
  }
}

export default RecordsController;
