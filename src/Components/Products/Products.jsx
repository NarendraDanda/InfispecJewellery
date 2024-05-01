import { data } from 'autoprefixer'
import React from 'react'
import Img1 from '../Assets/ProImage1.png'
import Img2 from '../Assets/ProImage2.png'
import Img3 from '../Assets/ProImage3.png'
import Img4 from '../Assets/ProImage4.png'
import Img5 from '../Assets/ProImage5.png'
import { FaStar } from 'react-icons/fa6'



const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Ear Rings",
        model:"white",
        aosDelay:"0"
    },
    {
        id:2,
        img:Img2,
        title:"Necklaces & chains",
        model:"white",
        aosDelay:"200"
    },
    {
        id:3,
        img:Img3,
        title:"Mangalasutra",
        model:"white",
        aosDelay:"400"
    },
    {
        id:4,
        img:Img4,
        title:"Nose rings",
        model:"white",
        aosDelay:"600"
    },
    {
        id:5,
        img:Img5,
        title:"Rings",
        model:"white",
        aosDelay:"800"
    }
]

const Products = () => {
  return (
    <div className=' bg-red-50  mt-14 mb-12'>
      <div className='container'>
        {/* Header Section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            {/* <p data-aos ="fade-up"  className='text-sm text-primary '>Top Selling Products for you</p> */}
            <h1 data-aos ="fade-up" className='text-3xl font-bold'>Product By Category</h1>
            {/* <p data-aos ="fade-up" className='text-xs text-gray-400'>abcdefdkfaslfkfsdf kasfsldfkmgfdg </p> */}
        </div>
        {/* Body Section */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 
            md:grid-cols-4 lg:grid-cols-5 place-items-center'>
                {/* CardSection */}
                {
                    ProductsData.map((data)=>(
                    <div 
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={data.id}
                    className='space-y-3'
                    >
                        <img src={data.img} alt="" 
                        className='h-[300px] w-[220px] object-cover rounded-md' />
                    <div>
                        <h3 className='font-semibold'>{data.title}

                        </h3>
                        {/* <div className='flex items-center gap-1 ' >
                            <FaStar className='text-yellow-400'/>
                        </div> */}
                    </div>
                </div>  
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
