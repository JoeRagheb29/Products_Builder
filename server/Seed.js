import mongoose from "mongoose";
import ProductsModel from "./models/ProductModel.js";
await mongoose.connect("mongodb+srv://joe:2005@youssefcluster.320ensf.mongodb.net/?retryWrites=true&w=majority&appName=YoussefCluster");


const  seedProducts = ([
  { title: "Mechanical Keyboard",
    description: "RGB backlit keyboard",
    imageURL: "https://images.unsplash.com/photo-1626958390898-162d3577f293?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "85",
    colors: ["#13005A", "#84D2C5"],
    category: {
      name: "PC Desktop",
      imageURL: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80"
    }
  },
  { title: "Compact Car",
    description: "Eco-friendly electric car",
    imageURL: "https://images.unsplash.com/photo-1749058983469-11eaef8d7bc5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "7500",
    colors: ["#84D2C5"],
    category: {
      name: "Cars",
      imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  { title: "2022 Genesis GV70: Nominee",
    description: "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "500000",
    colors: [
      "#FF0032",
      "#2563eb",
      "#FF6E31"
    ],
    category: {
      name: "Cars",
      imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  { title: "Bookshelf",
    description: "5-layer solid wood",
    imageURL: "https://images.unsplash.com/photo-1593430980369-68efc5a5eb34?q=80&w=1185&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "220",
    colors: ["#3C2A21", "#6C4AB6"],
    category: {
      name: "Furniture",
      imageURL: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  { title: "Nike Shoes",
    description: "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "350",
    colors: [
      "#A31AC8",
      "#FF6E31",
      "#3C2A21",
      "#CB1C8D",
      "#645CBB",
      "#FF0032",
      "#820000",
      "#13005A",
      "#1F8A70",
      "#84D2C5"
    ],
    category: {
      name: "Nike",
      imageURL: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  { title: "Casual Men Clothes",
    description: "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL: "https://images.unsplash.com/photo-1552831388-6a0b3575b32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    price: "1500",
    colors: [],
    category: {
      name: "PC Desktop",
      imageURL: "https://images.unsplash.com/photo-1552831388-6a0b3575b32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    }
  },
  { title: "Chevrolet Spark. 995cc Petrol",
    description: "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "120000",
    colors: [
      "#A31AC8",
      "#3C2A21",
      "#1F8A70",
      "#820000",
      "#FF0032"
    ],
    category: {
      name: "Cars",
      imageURL: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  { title: "Nike Backpack",
    description: "Travel and sports use",
    imageURL: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "70",
    colors: ["#6C4AB6", "#e855f7"],
    category: {
      name: "Nike",
      imageURL: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  { title: "Casual Shirt",
    description: "Formal and stylish",
    imageURL: "https://images.unsplash.com/photo-1605542659134-3e06b9c7d8cc?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "55",
    colors: ["#CB1C8D"],
    category: {
      name: "Clothes",
      imageURL: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    }
  },
  { title: "Foldable Table",
    description: "Space-saving furniture",
    imageURL: "https://images.unsplash.com/photo-1718049719698-e2a64788589e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "110",
    colors: ["#3C2A21"],
    category: {
      name: "Furniture",
      imageURL: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  { title: "Running Shoes Pro",
    description: "Breathable with great grip",
    imageURL: "https://images.unsplash.com/photo-1542325059222-f8a794ccf28d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "120",
    colors: ["#A31ACB"],
    category: {
      name: "Nike",
      imageURL: "https://images.unsplash.com/photo-1542325059222-f8a794ccf28d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  },
  { title: "Office Chair",
    description: "Ergonomic mesh chair",
    imageURL: "https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "180",
    colors: ["#6C4AB6", "#3C2A21"],
    category: {
      name: "Furniture",
      imageURL: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  { title: "Basic T-Shirt",
    description: "100% cotton soft fabric",
    imageURL: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "45",
    colors: ["#658FBB", "#8c8A21"],
    category: {
      name: "T-Shirt",
      imageURL: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    }
  },
  { title: "Gaming Desktop",
    description: "High-performance PC for gamers",
    imageURL: "https://images.unsplash.com/photo-1613749030206-9f59d27a28b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1500",
    colors: ["#000000", "#13005A"],
    category: {
      name: "PC Desktop",
      imageURL: "https://images.unsplash.com/photo-1613749030206-9f59d27a28b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  },
  { title: "4K Action Camera",
    description: "Waterproof and portable",
    imageURL: "https://plus.unsplash.com/premium_photo-1723741320347-bf8a65518f8e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "210",
    colors: ["#CB1C8D", "#2563eb"],
    category: {
      name: "Camera",
      imageURL: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  { title: "Sports T-Shirt",
    description: "Dry-fit material",
    imageURL: "https://images.unsplash.com/photo-1714249090984-cbc595b0f3b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNwb3J0cyUyMFQlMjBTaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    price: "65",
    colors: ["#FF6E31"],
    category: {
      name: "T-Shirt",
      imageURL: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    }
  },
  { title: "Luxury Sofa",
    description: "3-seater comfort design",
    imageURL: "https://images.unsplash.com/photo-1724100688254-4038b53a7567?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    price: "999",
    colors: ["#658FBB", "#13005A"],
    category: {
      name: "Furniture",
      imageURL: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  { title: "Gaming Headset",
    description: "High quality sound with surround effect",
    imageURL: "https://images.unsplash.com/photo-1616440537338-1d04df3987f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "95",
    colors: ["#13005A", "#FF6E31"],
    category: {
      name: "PC Desktop",
      imageURL: "https://images.unsplash.com/photo-1640955014216-75201056c829?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  },
  { title: "Leather Jacket",
    description: "Stylish and durable",
    imageURL: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "199",
    colors: ["#000000"],
    category: {
      name: "Clothes",
      imageURL: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  },
  { title: "Smartphone X12",
    description: "AMOLED Display with 128GB storage",
    imageURL: "https://images.unsplash.com/photo-1644585027419-ae32b8dee5e8?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "999",
    colors: ["#2563eb", "#CB1C8D"],
    category: {
      name: "Camera",
      imageURL: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  { title: "Nike Air Max",
    description: "Classic running shoes",
    imageURL: "https://images.unsplash.com/photo-1662411198835-c5a151d2af9e?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "140",
    colors: ["#e855f7"],
    category: {
      name: "Nike",
      imageURL: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  { title: "Basic Hoodie",
    description: "Winter wear for daily use",
    imageURL: "https://images.unsplash.com/photo-1517942420142-6a296f9ee4b1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "80",
    colors: ["#8c8A21", "#000000"],
    category: {
      name: "Clothes",
      imageURL: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    }
  },
  { title: "Camera Tripod",
    description: "Adjustable height",
    imageURL: "https://images.unsplash.com/photo-1656666273502-9950992a6702?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FtZXJhJTIwVHJpcG9kfGVufDB8fDB8fHww",
    price: "35",
    colors: ["#2563eb"],
    category: {
      name: "Camera",
      imageURL: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  { title: "Convertible Car",
    description: "Speed and luxury",
    imageURL: "https://images.unsplash.com/photo-1599024320662-f4e7e5c634b9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "15000",
    colors: ["#A31ACB", "#84D2C5"],
    category: {
      name: "Cars",
      imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
])


const seedDB = async () => {
  await ProductsModel.deleteMany();
  await ProductsModel.insertMany(seedProducts);
  console.log("initial Seeding Done! 🌱✅");
  await mongoose.disconnect();
}

seedDB();