import { useState , ChangeEvent, PointerEvent , FormEvent, useEffect } from 'react';
import './App.css'
import Cards from './components/cards';
import Button from'./components/UI/Button';
import Modal from './components/UI/Modal';
import Input from './components/UI/Input';
import { formInputsList } from './data';
import { IProduct } from './interfaces';
import Validation from './Validations';
import ErrorMsg from './components/UI/ErrorMsg';

function App() {

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
  
  const [isOpen, setIsOpen] = useState(false);
  const [productData, setProductData] = useState<IProduct>(defaultObject);
  const [isValid , setIsValid] = useState<boolean>(false); // المسوولة عن البمت الاخير
  const [hasErrors , setHasErrors] = useState({
    title: "",
    description: "",
    price: "",
    imageURL: ""
  });

  /* Handle Modal */
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  function onChangeHandler(e:ChangeEvent<HTMLInputElement>) {
    let { name , value } = e.target;
    setProductData({...productData, [name]:value});
    setHasErrors({...hasErrors, [name]: ""});
  }

  function isValidHandler(hasErrors : {title:string, description:string, price:string, imageURL:string}) {
    // If all values are empty strings, then the form is valid (my code logic)
    if (Object.values(hasErrors).every((error) => error === "")) {
      console.log("form isValidHandler: " + true);
      setIsValid((isValid) => true);
    } else {
      console.log("form isValidHandler: " + false);
      setIsValid((isValid) => false);
    }

    return isValid;
  }


  function submitHandler(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // detect if the rules of error is valid or not and return it as an object to errors variable
    let errors = Validation(productData);
    
    // اكتبها بالشكل ده هنا عادي طالما انت مجهز القيمة اللي هتستخدمها لكن اوعى تطبعها ف الكونسول من هنا
    //  عشان هتتحدث بعد الكونسول ما يظهر فمش هتبان النتيجة غير المرة الجاية
    setHasErrors(errors);
    
    // Object.values(hasErrors).every((error) => error === "");
    // setIsValid((isValid) => true) : setIsValid((isValid) => false);
    console.log(productData);
    console.log(errors);
  }
  
  function cancelHandler(e:PointerEvent<HTMLButtonElement>) {
    e.preventDefault();
    setProductData(defaultObject);
    closeModal();
  }
  
  useEffect(() => {
    // console.log("hasErrors state:", hasErrors);
    // console.log("isValid: " + isValid);
    setIsValid(Object.values(hasErrors).every((error) => error === ""));
  }, [hasErrors]);
  

  // Example as a API (but it local file)
  let inputRendering = formInputsList.map((input) =>
    {return <div key={input.id} className="flex flex-col space-y-0.5">
              <label htmlFor={input.id}>Enter {input.label}</label>
              <Input id={input.id} name={input.name} type={input.type} 
                onChange={onChangeHandler} value={productData[input.name]}/>
              { hasErrors[input.name] && <ErrorMsg errorMsg={hasErrors[input.name]} />}
            </div> });



  return (
    <div className="container mx-auto text-black">
      <h1 className="text-3xl text-center py-5">My Product Builder</h1>     
      <Button width="w-fit" onClick={openModal} className="flex rounded-md 
      bg-fuchsia-500 hover:bg-fuchsia-600 px-4 py-2 mx-auto text-sm font-medium
      text-white">Build New Product</Button>
      <Cards />
      <Modal title={"Add New Product"} isOpen={isOpen} closeModal={closeModal}>
        <form className="flex flex-col space-y-2.5" onSubmit={submitHandler}>
          {inputRendering}
          <div className="flex flex-row space-x-2.5 my-1.5">
            <Button className="bg-gray-700 hover:bg-gray-800" onClick={cancelHandler}>Cancel</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Submit</Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default App;