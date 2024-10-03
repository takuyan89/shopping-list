import mongoose, { Document } from "mongoose";

export interface Item {
  title: string;
  description: string;
  dueData: string;
  amount: number;
}

export interface ItemDocument extends Item, Document {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

const itemSchema = new mongoose.Schema<ItemDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    dueData: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      default: 10,
    },
  },
  { timestamps: true }
);

export const ItemModel =
  mongoose.models.Item || mongoose.model("Item", itemSchema);
