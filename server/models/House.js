import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
  {
    Year: { type: String, required: true },
    price: { type: Number, required: true },
    squareFeet: { type: Number, required: true },
    bedrooms: { type: String, required: true },
    bathrooms: { type: String, required: true },
    description: { type: String, default: "Cool beans" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default House;