import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  imageURL: String,
  price: { type: String, required: true },
  colors: [ String ],
  category: {
    name: String,
    imageURL: String,
  }
})

export default model("ProductsModel", productSchema);