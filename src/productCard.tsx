import React from 'react'
import Image from './Image';

function productCard({src}) {

  return (
    <div className="border-2 border-gray-500 m-5">
      <Image src='https://www.pixelstalk.net/wp-content/uploads/image10/Cool-4K-Car-Wallpaper-with-the_art_of_car_painting_involves_simple_geometric_shapes.jpg'  alt="img1"/> 
      <div className="content px-3 py-1">
        <h1 className="text-xl py-2">Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet. Saepe voluptates exercitationem nisi, labore aliquam rem pariatur neque impedit.</p>
        <div className="colors flex m-2">
          <span className='block mx-0.5 rounded-full w-6 h-6 bg-amber-500 '></span>
          <span className='block mx-0.5 rounded-full w-6 h-6 bg-blue-800 '></span>
          <span className='block mx-0.5 rounded-full w-6 h-6 bg-amber-500 '></span>
          <span className='block mx-0.5 rounded-full w-6 h-6 bg-blue-800 '></span>
        </div>
        <div className="price flex justify-between">
          <p className='font-bold text-xl'>500,000$</p>
          <Image className="rounded-full w-6 h-6" src='https://www.pixelstalk.net/wp-content/uploads/image10/Cool-4K-Car-Wallpaper-with-the_art_of_car_painting_involves_simple_geometric_shapes.jpg' alt="img1"/>
        </div>
        <div className="btns flex gap-1 my-2">
          <button className='bg-violet-800 text-white hover:bg-violet-900 w-full p-1 rounded-lg'>EDIT</button>
          <button className='bg-red-800 text-white hover:bg-red-900 w-full p-1 rounded-lg'>DELETE</button>
        </div>
      </div>
    </div>
  )
}

export default productCard;