import { Schema } from "mongoose";
import { ICategory } from "./interfaces/interface.category";

export const categorySchema = new Schema<ICategory>({
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
