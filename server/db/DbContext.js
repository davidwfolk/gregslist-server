import ValueSchema from "../models/Value";
import CarSchema from "../models/Car";
import mongoose from "mongoose";
import HouseSchema from "../models/House.js"


class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  //FIXME add reference to carschema
  Cars = mongoose.model("Car", CarSchema)

  Houses = mongoose.model("House", HouseSchema)
}

export const dbContext = new DbContext();
