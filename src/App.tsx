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
  const [products , setProduct] = useState(productList);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [ProductToEdit, setProductToEdit] = useState<IProduct>(defaultObject);
  const [iconColorArr, setIconColorArr] = useState<string[]>([]);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [productEditIdx , setProductEditIdx] = useState<number>(0);
  
  const productRef = useRef(null);

  /* FUNCTIONS HANDLERS  */
  function openModal() { setIsOpen(true); };
  function closeModal() { setIsOpen(false); setIsOpenEdit(false); };

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
    // detect if the rules of error is valid or not and return it as an object to errors variable
    let errors = Validation(productData);
    console.log(errors);
    // اكتبها بالشكل ده هنا عادي طالما انت مجهز القيمة اللي هتستخدمها لكن اوعى تطبعها ف الكونسول من هنا
    //  عشان هتتحدث بعد الكونسول ما يظهر فمش هتبان النتيجة غير المرة الجاية
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

    setProduct((prevProducts) => [{ id: uuid(),
        title: productData.title,
        description: productData.description,
        imageURL: productData.imageURL,
        price: productData.price,
        colors: productData.colors,
        category: productData.category
      } , ...prevProducts ]
    );

    setProductData(defaultObject);
    setTempColors([]);
    setIconColorArr([]);
    closeModal();
  }

  function submitEditHandler(e:FormEvent<HTMLFormElement>) {
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
    
    setProductData(defaultObject);
    setTempColors([]);
    setIconColorArr([]);
    closeModal();
  }

  function cancelHandler(e:PointerEvent<HTMLButtonElement>) {
    e.preventDefault();
    setProductData(defaultObject);
    closeModal();

    console.log("مش ؤاضي يقفل")
  }
//.concat(ProductToEdit.colors)

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
      bg-fuchsia-500 hover:bg-fuchsia-600 px-4 py-2 mx-auto text-sm font-medium
      text-white">Build New Product</Button>
      <Cards products={products} ProductToEdit={ProductToEdit} setProductToEdit={setProductToEdit} setIsOpenEdit={setIsOpenEdit} setProductEditIdx={setProductEditIdx} />

      <AllModal title={"Add New Product"} isOpen={isOpen} closeModal={closeModal} submitingHandler={submitHandler} colors={colors} 
                rendering={inputRendering} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} 
                cancelHandler={cancelHandler} colorsArr={tempColors} ColorHandler={ColorHandler} iconColorArr={iconColorArr}/>

      <AllModal title={"Edit Exist Product"} isOpen={isOpenEdit} closeModal={closeModal} submitingHandler={submitEditHandler} colors={colors} setProductEditIdx={setProductEditIdx}
                rendering={EditInputRendering} selectedCategory={ProductToEdit.category} setSelectedCategory={(value) => setProductToEdit({...ProductToEdit ,category: value})}
                cancelHandler={cancelHandler} colorsArr={tempColors.concat(ProductToEdit.colors)} ColorHandler={ColorHandler} iconColorArr={iconColorArr}/>
    </div>
    </>
  )
}

export default App;