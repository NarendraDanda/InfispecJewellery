import React from 'react'
import Img1 from '../Assets/BestImage1.png'
import Img2 from '../Assets/BestImage2.png'
import Img3 from '../Assets/BestImage3.png'
import Img4 from '../Assets/BestImage4.png'
// import Img5 from '../Assets/BestImage5.png'
import { FaStar } from 'react-icons/fa6'

const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Ear Rings",
        model:"white"
        
    },
    {
        id:2,
        img:Img2,
        title:"Necklaces & chains",
        model:"white"
        
    },
    {
        id:3,
        img:Img3,
        title:"Mangalasutra",
        model:"white"
        
    },
    {
        id:4,
        img:Img4,
        title:"Nose rings",
        model:"white"
        
    }
    // {
    //     id:5,
    //     img:Img5,
    //     title:"Rings",
    //     model:"white"
        
    // }
]

const TopProducts = () => {
  return (
    <div>
     <div className=' bg-red-50 container'>
        {/* Header Section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            {/* <p data-aos ="fade-up"  className='text-sm text-primary '>Top Selling Products for you</p> */}
            <h1 data-aos ="fade-up" className='text-3xl font-bold'>Best Sellers</h1>
            {/* <p data-aos ="fade-up" className='text-xs text-gray-400'>abcdefdkfaslfkfsdf kasfsldfkmgfdg </p> */}
        </div>
        {/* Body Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-4 gap-20 md:gap-1 place-items-center'>
            { ProductsData.map((data)=>(
                 <div data-aos="zoom-in" > 
                {/* //className='rounded-2xl bg-white dark:bg-gray-800
                //  hover:bg-black/80 dark:hover:bg-primary hover:text-white
                //  relative shadow-xl duration-high group max-w-[300px]' */}
                 {/* ImageSection */}
                 <div className='h-[100px]'>
                     <img src={data.img} alt="" 
                     className='h-[300px] w-[250px] object-cover rounded-md'
                    //   className='max-w-[200px] block mx-auto transform -translate-y-20
                    //   group-hover:scale-105 duration-300 drop-shadow-sm'
                      />
                 </div>
                 {/* Details Section */}
                 <div className='p-4 text-center'>
                    <div>
                        <button className='bg-gray-500 hover:scale-105 
                        duration-300 text-white py-1 px-4
                        rounded-full mt-4 group-hover:bg-white 
                        group-hover:text-priamry'>Add to Cart</button>
                    </div>
                 <h1 className='text-xl font-bold'>
                        {data.title}
                    </h1>
                    <p className='text-gray-500 group-hover:text-white 
                    duration-300 text-sm line-clamp-2'>
                        {data.model}
                    </p>
                    {/* star rating */}
                    <div className='w-full flex items-center justify-center gap-1'>
                        <FaStar className='text-black-500'/>
                        <FaStar className='text-black-500'/>
                        <FaStar className='text-black-500'/>
                        <FaStar className='text-black-500'/>
                    </div>
                    
                 </div>
             </div>
            ))

            }
        </div>
     </div>
    </div>
  )
}

export default TopProducts
