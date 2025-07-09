import { useState } from 'react';
import './App.css'
import Button from './components/UI/Button';
import Cards from './components/cards';
import Modal from './components/UI/Modal';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  /* Handle Modal */
  function openModal() { setIsOpen(true); }
  function closeModal() { setIsOpen(false); }

  return (
    <div className="px-5 container text-black">
      <h1 className="text-3xl text-center py-5">My Product Builder</h1>
      <Button width="w-fit" onClick={openModal} className="rounded-md bg-black/20 hover:bg-black/50 px-4 py-2 text-sm font-medium text-white">Add Product</Button>
      <Cards />
      <Modal title={"منور يا جوو"} description={"الوصف هيتكتب هنا"} isOpen={isOpen} closeModal={closeModal}>
        <div className="flex flex-row items-center gap-2">
          <Button className="bg-gray-700" onClick={closeModal}>Cancel</Button>
          <Button className="bg-blue-600" onClick={closeModal}>Add</Button>
        </div>
      </Modal>
    </div>
  )
}

export default App;