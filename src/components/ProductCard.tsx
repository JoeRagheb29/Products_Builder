import React from 'react'
import Image from './UI/Image';
import Button from './UI/Button';
import TextSlicer from '../utitlies/textslicer';
import { IProduct } from '../interfaces';
import ColorCircle from './UI/ColorCircle';
import { categories } from '../data';




interface iprop extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  product: IProduct

}

// function ColorCircle({ color , ...rest }: iprop) {
//   return (
//       <span className={`block mx-0.5 rounded-full w-6 h-6 `} style={{ backgroundColor:color}} {...rest}></span>
//   )
// }




function ProductCard({product , ...rest } : iprop) {

  return (
    <div className="border-2 border-gray-500 m-5 ">
      <Image src={product.imageURL} alt={`img`+product.id}/> 
      <div className="content px-3 py-1">
        <h1 className="text-xl py-2">{product.title}</h1>
        <p><TextSlicer txt={product.description} max={120}/></p>
        <div className="colors flex my-2">
          {product.colors.map((color) => <ColorCircle key={color} color={color} {...rest} />)}
        </div>
        <div className="price flex justify-between">
          <p className='font-bold text-xl'>{product.price}$</p>
          <Image className="rounded-full w-6 h-6" src={product.category.imageURL} alt="img1"/>
        </div>
        <div className="btns flex gap-1 my-2">
          <Button className='bg-violet-800 hover:bg-violet-900'>EDIT</Button>
          <Button className='bg-red-800 hover:bg-red-900'>DELETE</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;