import mongoose from "mongoose";

export const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  color: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});
