import React from 'react'
import '../App.css'
import ProductCard from './ProductCard';
import {productList} from "../data/index";
import Modal from './UI/Modal';

const Cards = () => {

  const rendering = productList.map(product => <ProductCard key={product.id} product={product} />);

  return (
    <>
      <div className="Cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {rendering}
      </div>
    </>
  )
}

export default Cards












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