import express, { json } from "express";
import cors from "cors";
import { mongoose } from "mongoose";
import ProductModel from "./models/ProductModel.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use(express.static('public'));


const mongoURI = process.env.MONGODB_URI; // 👈 ناخد الرابط من متغير البيئة

mongoose.connect(mongoURI)
 .then(() => console.log('✅ Connected to MongoDB'))
 .catch((err) => console.error('❌ MongoDB Error:', err));

ProductModel.find()
.then((data) => {
  console.log("data fetched successfully");
})
.catch((err) => console.log(err));


try {
  app.get("/", async (req, res)=> {  
    const products = await ProductModel.find();
    res.json(products);
  })

} catch (error) {
  console.error("Error getting the products:", error);
}

app.post("/", async (req, res) => {
  try {
    const Product = new ProductModel(req.body);
    await Product.save();
    res.status(201).json({ message: "the new Product added to the Database successfully" 
      , Product });
  } catch(error) {
    console.log(error);
    res.status(400).json({ message: "Error adding the Product to the Database" });
  }
})

app.put("/:id", async (req, res) => {
  const productID = req.params.id;
  const updatedProductInputs = req.body;

  const updated = await ProductModel
            .findByIdAndUpdate(productID , updatedProductInputs , {new: true});

  res.json({ data: updated, message: "Product updated in DBBB ya Joee" });
});

app.delete("/:id", async (req, res) => {
  await ProductModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

app.get("/:id", async (req, res)=> {
  const product = await ProductModel.findById(req.params.id);
  
  if (!product) {
    return res.status(404).json({ message: "Product not found :(" });
  }

  res.json(product);
});


app.listen(5000, () => {
    console.log(`Server is running on https://products-builder-backend.vercel.app/ || http://localhost:5000/ `);
});

export default app;