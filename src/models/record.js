import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  bikeId: {
    type: String,
    required: true,
    unique: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  dateStolen: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

export default mongoose.model("Record", recordSchema);
