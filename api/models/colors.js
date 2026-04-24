import { Schema, model } from "mongoose";

const colorsSchema = new Schema({
  color: String,
})

export default model("ColorsModel", colorsSchema);