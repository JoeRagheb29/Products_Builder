import express, { json } from "express";
import cors from "cors";
import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
// import { mongoose } from "mongoose";

// mongoose.connect("mongodb+srv://joe:2005@youssefcluster.320ensf.mongodb.net/?retryWrites=true&w=majority&appName=YoussefCluster")
//     .then(() => 
//       console.log("Connected to MongoDB دااااااااارت يا صيييييييع")
//     ).catch(err => console.error("erorr ", err));

// import productsModel from './models/ProductModel.js' ;

// productsModel.find().then((data) => {
//   console.log("Fetched products from DB:", data);
// });



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DATA_PATH = join(__dirname, "data", "products.json");

const app = express();
app.use(cors());
app.use(json());

app.post("/",(req, res) => {
  const newProduct = req.body;  // req.body === product
  let data = [];
  
  if(fs.existsSync(DATA_PATH)) {
    const raw = fs.readFileSync(DATA_PATH);
    data = JSON.parse(raw);
  }
  
  data.push(newProduct);
  // اكتبهم في الملف
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
  res.status(201).json({ message: "Product added" });
})

app.get("/",(req, res)=> {
  let data = [];
  if(fs.existsSync(DATA_PATH)) {
    const raw = fs.readFileSync(DATA_PATH);
    data = JSON.parse(raw);
  }
  res.json(data);
})

app.put("/:id",(req, res) => {
  const productID = req.params.id;
  const updatedProductInputs = req.body;
  let data = [];

  // ana hena baros kol content el file f el array 
  if(fs.readFileSync(DATA_PATH)) {
    const raw = fs.readFileSync(DATA_PATH);
    data = JSON.parse(raw);
  }

  const index = data.findIndex((product) => product.id === productID);
  if(index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  data[index] = { ...data[index] , ...updatedProductInputs };

  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null , 2));
  res.json({message: "Product updated ya Joee" , product: data[index]});
});

app.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete product" });
  }
});

app.get("/:id",(req, res)=> {
  const productId = req.params.id;
  let data = [];

  if(fs.existsSync(DATA_PATH)) {
    const raw = fs.readFileSync(DATA_PATH);
    data = JSON.parse(raw);
  }
  
  const product = data.find((p) => p.id == productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found ya Joe" });
  }

  res.json(product);
});


app.listen(5000, () => {
  console.log("data path:" , DATA_PATH);
  console.log(`Server is running on http://localhost:5000`);
});