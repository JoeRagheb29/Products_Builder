import { useState } from 'react';
import './App.css'
import Cards from './components/cards';
import Button from './components/UI/Button';
import Modal from './components/UI/Modal';
import Input from './components/UI/Input';
import { formInputsList } from './data';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  /* Handle Modal */
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  let inputRendering = formInputsList.map((input) =>
      { return <div key={input.id} className="flex flex-col space-y-0.5">
        <label htmlFor={input.id}>Enter {input.label}</label>
        <Input type={input.type} id={input.id} />
      </div> })

  return (
    <div className="px-5 container text-black">
      <h1 className="text-3xl text-center py-5">My Product Builder</h1>
      <Button width="w-fit" onClick={openModal} className="rounded-md 
      bg-black/20 hover:bg-black/50 px-4 py-2 text-sm font-medium
      text-white">Add Product</Button>
      <Cards />
      <Modal title={"Add New Product"} isOpen={isOpen} closeModal={closeModal}>
        <div className="flex flex-col space-y-2.5">
          {inputRendering}
          <div className="flex flex-row space-x-2.5 my-1.5">
            <Button className="bg-gray-700 hover:bg-gray-800" onClick={closeModal}>Cancel</Button>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={closeModal}>Add</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default App;