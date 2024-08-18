import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const cardSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4, // Automatically generate a unique ID using UUID
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // This will add createdAt and updatedAt fields automatically
});

const Card = mongoose.model('Card', cardSchema);

export default Card;
