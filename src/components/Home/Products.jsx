import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";


const ProductsData = [
    {
        img  : '',
        desc : 'Dell Vostro 3401 Core-13-10th Gen 8gbRam',
        price  : '25,99'
    },
    {
        img  : '',
        desc : 'Dell Vostro 3401 Core-13-10th Gen 8gbRam',
        price  : '25,99'
    },
    {
        img  : '',
        desc : 'Dell Vostro 3401 Core-13-10th Gen 8gbRam',
        price  : '25,99'
    },
    {
        img  : '',
        desc : 'Dell Vostro 3401 Core-13-10th Gen 8gbRam',
        price  : '25,99'
    },
]

function Products() {
    const [isLiked,setLike] = useState(false);

  return (
    <div className='flex items-center justify-center'>
         <div className='p-5 md:p-10 xl:max-w-[90vw] '>
        <h1 className='text-2xl border-b text-navy border-navy pb-5 font-bold'>Best Seller</h1>
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 ">
        {ProductsData.map((e,index)=>(
            <div key={index}
            className=' shadow-lg shadow-gray-400 hover:scale-[0.9] transition-all duration-500 cursor-pointer border-gray-300 border relative'>
            <img src="Dell.jpeg" className='object-cover w-full'/>
           <div className='p-5'>
            <p>{e.desc}</p>
            <p className='text-green-500'>Rs {e.price}</p>
            <div className='mt-5'>
            <button  className="bg-orange py-3 px-2  uppercase w-full transition-all duration-500 ease-in-out hover:shadow-black shadow-lg text-white" >Add to cart</button>

            </div>
            <FaRegHeart className={`absolute top-5 right-5 text-3xl ${isLiked ? 'text-orange' : 'text-black'}`} onClick={(index)=>{
                setLike(!isLiked)
            }}/>
            </div>
                </div>
        ))}
        </div>



        {/* new arrivals */}
        <h1 className='text-2xl border-b text-navy border-navy pb-5 font-bold mt-20'>New arrivals</h1>
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 ">
        {ProductsData.map((e,index)=>(
            <div key={index}
            className=' shadow-lg hover:scale-[0.9] transition-all duration-500 cursor-pointer shadow-gray-400 border-gray-300 border relative p-5'>
            <img src="chromeBook.png" className='object-cover '/>
           <div className='mt-5'>
            <p>{e.desc}</p>
            <p className='text-green-500'>Rs {e.price}</p>
            <div className='mt-5'>
            <button  className="bg-orange py-3 px-2  uppercase w-full transition-all duration-500 ease-in-out hover:shadow-black shadow-lg text-white" >Add to cart</button>

            </div>
            <FaRegHeart className={`absolute top-5 right-5 text-3xl ${isLiked ? 'text-orange' : 'text-black'}`} onClick={(index)=>{
                setLike(!isLiked)
            }}/>
            </div>
                </div>
        ))}
        </div>



        {/* bestHeadphones */}
        <h1 className='text-2xl border-b border-navy text-navy pb-5 font-bold mt-20'>Best Headphones</h1>
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 ">
        {ProductsData.map((e,index)=>(
            <div key={index}
            className=' shadow-lg shadow-gray-400 hover:scale-[0.9]  transition-all duration-500 cursor-pointer border-gray-300 border relative p-5'>
            <img src="Dell.jpeg" className='object-cover w-full'/>
           <div className='mt-5'>
            <p>{e.desc}</p>
            <p className='text-green-500'>Rs {e.price}</p>
            <div className='mt-5'>
            <button  className="bg-orange py-3 px-2  uppercase w-full transition-all duration-500 ease-in-out hover:shadow-black shadow-lg text-white" >Add to cart</button>

            </div>
            <FaRegHeart className={`absolute top-5 right-5 text-3xl ${isLiked ? 'text-orange' : 'text-black'}`} onClick={(index)=>{
                setLike(!isLiked)
            }}/>
            </div>
                </div>
        ))}
        </div>
    </div>
    </div>
   
  )
}

export default Products