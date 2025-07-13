import { useState , ChangeEvent } from 'react';
import './App.css'
import  Cards from './components/cards';
import Button from './components/UI/Button';
import  Modal from './components/UI/Modal';
import  Input from './components/UI/Input';
import { formInputsList } from './data';
import { IProduct } from './interfaces/index';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productData, setProductData] = useState<IProduct>({
    title:"",
    description:"",
    price: "",
    imageURL:"",
    colors: [],
    category: {
      name: "",
      imageURL: ""
    }
  });
  /* Handle Modal */
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  function onChangeHandler(e:ChangeEvent<HTMLInputElement>) {
    let { name , value } = e.target;
    setProductData({...productData, [name]:value});
    console.log(productData);
  }

  function submitHandler(e:ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log(productData);

    closeModal();
  }

  function cancelHandler(e:ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setProductData({
    title:"",
    description:"",
    price: "",
    imageURL:"",
    colors: [],
    category: {
      name: "",
      imageURL: ""
    }});

    closeModal();
  }

  let inputRendering = formInputsList.map((input) =>
      { return <div key={input.id} className="flex flex-col space-y-0.5">
        <label htmlFor={input.id}>Enter {input.label}</label>
        <Input id={input.id} name={input.name} type={input.type} onChange={e => onChangeHandler(e)} value={productData[input.name]}/>
      </div> })

  return (
    <div className="px-5 container text-black">
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