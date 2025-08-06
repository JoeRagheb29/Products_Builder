import Modal from './UI/Modal'
import Select from './UI/Select';
import ColorCircle from './UI/ColorCircle';
import { CheckIcon } from '@heroicons/react/24/solid';
import Button from './UI/Button';
import { FormEvent, JSX, PointerEvent } from 'react';
import { ICategory } from '../interfaces';

interface IProps {
  title: string;
  isOpen: boolean;
  rendering: JSX.Element[];
  closeModal: () => void;
  selectedCategory: {name: string , imageURL: string};
  colors: string[];
  iconColorArr: string[];
  colorsArr: string[];
  setSelectedCategory: (category: ICategory) => void;
  ColorHandler: (col : string) => void;
  cancelHandler: (e: PointerEvent<HTMLButtonElement>) => void;
  submitingHandler: (e:FormEvent<HTMLFormElement>) => void;
  setProductEditIdx? : React.Dispatch<React.SetStateAction<number>>;
}

function AllModal({title , isOpen , rendering , closeModal , submitingHandler , selectedCategory , colors,
 setSelectedCategory , ColorHandler , cancelHandler , colorsArr , iconColorArr } : IProps) {


  return (

      <Modal title={title} isOpen={isOpen} closeModal={closeModal}>
        <form className="flex flex-col space-y-2.5" onSubmit={submitingHandler}>
          {rendering} {/* EditInputRendering | AddInputRendering */}
          <Select selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <div className="flex my-1.5 cursor-pointer">{colors.map((color) =>
            <ColorCircle key={color} color={color} onClick={() => ColorHandler(color)}>
              {iconColorArr && iconColorArr.includes(color) && <CheckIcon className="absolute inset-0 z-8 m-auto h-4 w-4 text-white" />}
            </ColorCircle>)}
          </div>
          <div className="flex flex-wrap my-1.5 space-x-1 p-0.5 rounded-md cursor-pointer">{colorsArr.map((color : string) => 
            <span key={color} className={`block m-0.5 p-0.5 rounded-md text-sky-50 `} style={{backgroundColor: color}}>{color}</span>)}
          </div>
          <div className="flex flex-row space-x-2.5 my-1.5">
            <Button className="bg-gray-500 hover:bg-gray-600" onClick={cancelHandler}>Cancel</Button>
            <Button className="bg-green-600 hover:bg-green-700">Submit</Button>
          </div>
        </form>
      </Modal>
  )
}

export default AllModal;