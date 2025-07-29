import { Schema, model } from "mongoose";

const colorsSchema = new Schema({
  color: string,
})

export default model("ColorsModel", colorsSchema);