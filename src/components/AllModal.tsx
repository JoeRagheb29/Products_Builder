import Modal from './UI/Modal'
import Select from './UI/Select';
import ColorCircle from './UI/ColorCircle';
import { CheckIcon } from '@heroicons/react/24/solid';
import Button from './UI/Button';


// const [iconColorArr, setIconColorArr] = useState<string[]>([]);
// const [tempColors, setTempColors] = useState<string[]>([]);

interface IProps {
  title,
  isOpen,
  rendering,
  closeModal,
  submitingHandler,
  selectedCategory,
  colors,
  setSelectedCategory,
  ColorHandler,
  cancelHandler,
  tempColors,
  iconColorArr,
  setProductEditIdx?,
}

function AllModal({title , isOpen , rendering , closeModal , submitingHandler , selectedCategory , colors,
  setSelectedCategory , ColorHandler , cancelHandler , tempColors , iconColorArr} : IProps) {


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
          <div className="flex flex-wrap my-1.5 space-x-1 p-0.5 rounded-md cursor-pointer">{tempColors.map((color) => 
            <span key={color} className={`block m-0.5 p-0.5 rounded-md text-sky-50 `} style={{backgroundColor: color}}>{color}</span>)}
          </div>
          <div className="flex flex-row space-x-2.5 my-1.5">
            <Button className="bg-gray-700 hover:bg-gray-800" onClick={cancelHandler}>Cancel</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Submit</Button>
          </div>
        </form>
      </Modal>
  )
}

export default AllModal;