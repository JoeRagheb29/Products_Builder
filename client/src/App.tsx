import { useState , ChangeEvent, PointerEvent , FormEvent, useRef , useEffect, JSX } from 'react';
import './App.css'
import Cards from './components/cards';
import Button from'./components/UI/Button';
import Input from './components/UI/Input';
import ErrorMsg from './components/UI/ErrorMsg';
import { categories, colors, formInputsList, productList } from './data';
import { IProduct } from './interfaces';
import Validation from './Validations';
import { v4 as uuid } from "uuid";
import AllModal from './components/AllModal';
import HeroSection from './components/HeroSection';
import Modal from './components/UI/Modal';
import toast , { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

const defaultObject = {
  title:"",
  description:"",
  price:"",
  imageURL:"",
  colors: [],
  category: {
    name: "",
    imageURL: ""
  }
}; 


const App = () => {
  /* STATES */
  const [isOpen, setIsOpen] = useState(false);
  const [productData, setProductData] = useState<IProduct>(defaultObject);
  const [hasErrors , setHasErrors] = useState({title: "", description: "", price: "", imageURL: ""});
  const [products , setProduct] = useState<IProduct[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [ProductToEdit, setProductToEdit] = useState<IProduct>(defaultObject);
  const [iconColorArr, setIconColorArr] = useState<string[]>([]);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [productEditIdx , setProductEditIdx] = useState<number>(0);
  const [openConfirm , setOpenConfirm] = useState<boolean>(false);
  
  const productRef = useRef(null);

  /* FUNCTIONS HANDLERS  */
  function openModal() { setIsOpen(true); };
  function closeModal() { setIsOpen(false); setIsOpenEdit(false); setOpenConfirm(false)};

  useEffect(() => {
    async function fetchProducts() {
      try {
        fetch("https://productsbuilder-production.up.railway.app/")
        .then((res) => res.json())
        .then((data) => {
          const productsByIDs = data.map((product : IProduct) => ({...product})).reverse();
          console.log("data fetched: " , productsByIDs);
          
          setProduct(productsByIDs);
          });
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  async function addProductToDB(product : IProduct) {
    try {
      console.log("product before send:", product);

      fetch("https://productsbuilder-production.up.railway.app/" , {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => res.json())
        .then((data) => {
          console.log("Posted Data seccessfully: ", data);
          console.log("product:" ,product);
        });
    } catch (err) {
      console.log("Error: " , err);
    }
  }

  async function EditProductfromDB(product : IProduct) {
    try {
      console.log("product: ", product);

      fetch(`https://productsbuilder-production.up.railway.app/${product._id}` , {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => res.json())
        .then((data) => {
          console.log("Product updated from DB: ", data);
        });
    } catch (err) {
      console.log("Error: " , err);
    }
  }

  async function DeleteProductfromDB(product : IProduct) {
    try {
      fetch(`https://productsbuilder-production.up.railway.app/${product._id}` , {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => res.json())
        .then((data) => {
          console.log("Product deleted: ", data);
        });
    } catch (err) {
      console.log("Error: " , err);
    }
  }

  function onChangeHandler(e:ChangeEvent<HTMLInputElement>) {
    let { name , value } = e.target;
    setProductData({...productData, [name]:value});
    setHasErrors({...hasErrors, [name]: ""});
  }
 
  function onChangeEditHandler(e:ChangeEvent<HTMLInputElement>) {
    let { name , value } = e.target;
    setProductToEdit({...ProductToEdit, [name]:value});
    setHasErrors({...hasErrors, [name]: ""});
  }
  
  function ColorHandler(color : string) {
    // the statements below written in the useState for toggling in the asynchronous UI state
    setIconColorArr((prevColor) => (
      (prevColor.includes(color) || prevColor.concat(ProductToEdit.colors).includes(color)) ? 
      prevColor.filter((item) => item !== color) : [...prevColor, color]
    ));
    
    setTempColors((prevColors) => (
      (prevColors.includes(color) || prevColors.concat(ProductToEdit.colors).includes(color)) ? 
      prevColors.filter((item) => item !== color) : [...prevColors, color]
    ));

  }  

  function submitHandler(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let errors = Validation(productData);
    console.log(errors);
    setHasErrors(errors);
    // for submit the form if there is no errors
    const isValid = Object.values(errors).every((error) => error === "");
    console.log("isValid: " + isValid);
    
    if(!isValid) {
      return;
    }

    if(tempColors.length === 0) {
      alert("Please select at least one color");
      return;
    }
    
    setProductData(defaultObject);
    setTempColors([]);
    setIconColorArr([]);
    closeModal();

    const product = {
      ...productData,
      colors: tempColors,
      iconColor: iconColorArr,
    }

    setProduct((prevList) => [product , ...prevList]);
  
    toast("This item has been Added to the DataBase successfully",{
    icon: "✅ ", style : {
      backgroundColor: "black", // Tailwind gray-800
      color: "white",
      borderRadius: "8px",
      padding: "10px 16px",
    }});
    
    addProductToDB(productData);
  }

  function EditHandler(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let errors = Validation(ProductToEdit);
    setHasErrors(errors);

    const isValid = Object.values(errors).every((error) => error === "");
    if(!isValid) {
      return;
    }
    if(tempColors.length === 0 && ProductToEdit.colors.length === 0) {
      alert("Please select at least one color");
      return;
    }

    const updatedProducts = [ ...products];

    updatedProducts[productEditIdx] = {...ProductToEdit , colors: tempColors.concat(ProductToEdit.colors)};
    setProduct(updatedProducts);
    
    toast("This item has been Edited successfully",{
      icon: "✅ ", style : {
        backgroundColor: "black", // Tailwind gray-800
        color: "white",
        borderRadius: "8px",
        padding: "10px 16px",
    }});
    
    EditProductfromDB(updatedProducts[productEditIdx]);

    setProductData(defaultObject);
    closeModal();
    setTempColors([]);
    setIconColorArr([]);
  }

  function confirmHandler(e:PointerEvent<HTMLButtonElement>) {
    setOpenConfirm(true);
  }

  function RemoveHandler() {
    console.log("PRODUCT ID:",ProductToEdit._id);
    const filteredProducts = products.filter(product => product._id !== ProductToEdit._id);
    setProduct(filteredProducts);
    closeModal();
    toast("This item has been removed successfully",{
      icon: "✅ ", style : {
        backgroundColor: "black", // Tailwind gray-800
        color: "white",
        borderRadius: "8px",
        padding: "10px 16px",
      }
      ,})
    DeleteProductfromDB(ProductToEdit);
  }

  function cancelHandler(e:PointerEvent<HTMLButtonElement>) {
    e.preventDefault();
    setProductData(defaultObject);
    setTempColors([]);
    setIconColorArr([]);
    closeModal();
  }

  // Example as a API (but it local file)
  const inputRendering: JSX.Element[] = formInputsList.map((input) =>
    {return <div key={input.id} className="flex flex-col space-y-0.5">
              <label htmlFor={input.id}>Enter {input.label}</label>
              <Input id={input.id} name={input.name} type={input.type} 
                onChange={onChangeHandler} value={productData[input.name]}/>
              { hasErrors[input.name] && <ErrorMsg errorMsg={hasErrors[input.name]} />}
      </div> });

  const EditInputRendering: JSX.Element[] = formInputsList.map((input) =>
    (  <div key={input.id} className="flex flex-col space-y-0.5">
          <label htmlFor={input.id} >Enter {input.label}</label>
          <Input id={input.id} name={input.name} type={input.type} 
              onChange={onChangeEditHandler} value={ProductToEdit[input.name]} />
              { hasErrors[input.name] && <ErrorMsg errorMsg={hasErrors[input.name]} />} 
      </div>))

  useEffect(() => {
    setProductData({...productData, colors: tempColors});
  }, [tempColors])

  useEffect(() => {
      setProductData({... productData, category: selectedCategory});
  }, [selectedCategory])

  return (
    <>
    <HeroSection ScrollToRef={productRef} />
    <div className="container mx-auto text-black" ref={productRef}>
      <h1 className="text-3xl text-center py-5">My Product Builder</h1>
      <Button width="w-fit" onClick={openModal} className="flex rounded-md 
        bg-indigo-600 hover:bg-indigo-700 px-6 py-3 mx-auto text-sm font-medium
      text-white">Build New Product</Button>
      <Cards products={products} ProductToEdit={ProductToEdit} setProductToEdit={setProductToEdit} setIsOpenEdit={setIsOpenEdit} setProductEditIdx={setProductEditIdx} setConfirmToOpen={confirmHandler} />
      <AllModal title={"Add New Product"} isOpen={isOpen} closeModal={closeModal} submitingHandler={submitHandler} colors={colors} 
                rendering={inputRendering} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} 
                cancelHandler={cancelHandler} colorsArr={tempColors} ColorHandler={ColorHandler} iconColorArr={iconColorArr}/>

      <AllModal title={"Edit Exist Product"} isOpen={isOpenEdit} closeModal={closeModal} submitingHandler={EditHandler} colors={colors} setProductEditIdx={setProductEditIdx}
                rendering={EditInputRendering} selectedCategory={ProductToEdit.category} setSelectedCategory={(value) => setProductToEdit({...ProductToEdit ,category: value})}
                cancelHandler={cancelHandler} colorsArr={tempColors.concat(ProductToEdit.colors)} ColorHandler={ColorHandler} iconColorArr={iconColorArr}/>  
      
      <Modal isOpen={openConfirm} closeModal={closeModal}>
        <h1 className="text-2xl font-medium mb-5">Are you sure you want to remove this product?</h1>
        <p className="text-sm text-gray-500">Please note that removing a product will delete it permanently
          and all the associated data will be lost. Please confirm your decision to proceed with the removal.
        </p>
        <div className="flex justify-center gap-2 mt-10 mb-2 ">
          <Button width="w-full" onClick={RemoveHandler} className="bg-red-500 hover:bg-red-600">Yes , Remove it</Button>
          <Button width="w-full" onClick={closeModal} className="bg-gray-500 hover:bg-gray-600">Cancel</Button>
        </div>
      </Modal>

      <Toaster />
    </div>
    <Footer />
    </>
  )
}

export default App;