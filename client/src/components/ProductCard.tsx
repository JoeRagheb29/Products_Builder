import React, { useEffect } from 'react'
import './../App.css'
import Image from './UI/Image';
import Button from './UI/Button';
import TextSlicer from '../utitlies/textslicer';
import { IProduct } from '../interfaces';
import ColorCircle from './UI/ColorCircle';
import { AnimatePresence, motion } from "framer-motion";

interface iprop extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  products: IProduct[];
  product: IProduct;
  setProductToEdit: (product : IProduct) => void;
  setIsOpenEdit: (e : boolean) => void;
  ProductToEdit,
  idx: number;
  setProductEditIdx?,
  setConfirmToOpen: () => void;
  
}


const ProductCard = ({products, product, setProductToEdit, setIsOpenEdit, ProductToEdit, idx, setProductEditIdx, setConfirmToOpen, ...rest } : iprop) => {
  
  function prepareToEdit() {
    setProductToEdit(product);
    setIsOpenEdit(true);
    setProductEditIdx(idx);
  }

  function prepareToRemove() {
    setProductToEdit(product);
    setConfirmToOpen();
  }

  return (
    <motion.div className="flex flex-col border-2 border-gray-300  rounded-sm m-5 transition hover:shadow-2xl cusShadow "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}>
      <Image src={product.imageURL} alt={`img`+product._id}/> 
      <div className="content px-3 py-1 flex flex-col flex-grow">
        <h1 className="text-xl py-2">{product.title}</h1>
        <p><TextSlicer txt={product.description} max={120}/></p>
        <div className="colors flex my-2">
          {product.colors.map((color) => <ColorCircle key={color} color={color} {...rest} />)}
        </div>
        <div className="price flex justify-between flex-grow">
          <p className='font-bold text-xl'>{product.price}$</p>
          <Image className="rounded-full w-6 h-6" src={product.category.imageURL} alt="img1"/>
        </div>
        <div className="btns w-full flex gap-1 my-2">
          <Button className='bg-blue-600 hover:bg-blue-700' onClick={prepareToEdit}>EDIT</Button>
          <Button className='bg-red-600 hover:bg-red-700' onClick={prepareToRemove}>DELETE</Button>
        </div>
      </div>
    </motion.div>   
  )
}

export default ProductCard;