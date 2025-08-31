import React , {memo} from 'react'
import '../App.css'
import ProductCard from './ProductCard';
import { IProduct } from '../interfaces';
import { motion } from 'framer-motion';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  products: IProduct[];
  setProduct: React.Dispatch<React.SetStateAction<IProduct[]>>;
  setIsOpenEdit: React.Dispatch<React.SetStateAction<IProduct[]>>;
  ProductToEdit;
  setProductEditIdx?;
  setConfirmToOpen,
}


const Cards = ({ products , ProductToEdit , setProductToEdit , setIsOpenEdit, setProductEditIdx , setConfirmToOpen }) => {

  const rendering = products.map((product : IProduct , idx : number) => <ProductCard key={idx} products={products} product={product} setConfirmToOpen={setConfirmToOpen}
    setProductToEdit={setProductToEdit} setIsOpenEdit={setIsOpenEdit} ProductToEdit={ProductToEdit} idx={idx} setProductEditIdx={setProductEditIdx} />);

  return (
    <>
      <div className="Cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {rendering}
      </div>
    </>
  )
}

export default memo(Cards);












{/* <ProductCard product={productList[0]} /> */}

{/* <ProductCard product="" />
  <ProductCard product="" />
  <ProductCard product="" />
  <ProductCard product="" />
  <ProductCard product="" />
  <ProductCard product="" />
  <ProductCard product="" />
  <ProductCard product="" />
  <ProductCard product="" /> */}