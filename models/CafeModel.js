import mongoose from "mongoose";

const CafeSchema = new mongoose.Schema(
  {
    cafeName: {
      type: String,
      required: [true, "Please enter a cafe name"],
      maxLength: 18,
      trim: true,
    },
    city: {
      type: String,
      required: [true, "Please enter a city"],
      minLength: 2,
      maxLength: 18,
      trim: true,
    },
    visited: {
      type: Boolean,
    },
    details: {
      type: String,
      maxLength: 200,
      trim: true,
    },
    coffeeValue: {
      type: Number,
    },
    vibeValue: {
      type: Number,
    },
    foodValue: {
      type: Number,
    },
    visited: {
      type: Boolean,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide username"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cafe", CafeSchema);
