import express, { json } from "express";
import cors from "cors";
import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DATA_PATH = join(__dirname, "data", "products.json");

const app = express();
app.use(cors());
app.use(json());

app.post("/",(req, res)=> {
  const newProduct = req.body;
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

app.listen(5000, () => {
  console.log("data path:" , DATA_PATH);
  console.log(`Server is running on http://localhost:5000`);
});


// app.get('/',(req, res)=> {
//   console.log(req);
//   // return res.status(200).send("Welcome to the server");
// })