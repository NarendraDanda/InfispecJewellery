import React from 'react'
import BannerImg from '../Assets/timer@2x.png'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'


const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center
    py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6
        items-center'>
            {/* text details section */}
            <div className='flex flex-col sm:text-4xl font-bold gap-6 sm:pt-0'>
                <h1 className='text-3xl sm:text-4xl font-bold px-6'>Tailerd For You</h1>
                    
                <p className='text-sm text-gray-500 
                tracking-wide leading-5 px-6'>
                    Infispec Ecommerce is not a one-size-fits-all platform. We take the time
                 to understand your business, your values, and your goals. Our team of expert 
                 developers and designers collaborate with you to build a customized ecommerce
                 website that reflects the essence of your brand. Stand out from the crowd with 
                 a website that is as unique as your business.
                 </p>
                 <div>
                    {/* <div className='flex items-center gap-4'>
                        <GrSecure className='text-sm h-12 w-12 shadow-sm 
                        p-4 rounded-full bg-violet-100 dark:bg-violet-400'
                        />
                        <p>Quality products</p>

                    </div> */}
                 </div>
            </div>
            {/* image section */}
            <div data-aos="zoom-in">
                <img src={BannerImg} alt="" 
                className='max-w-[400px] h-[350px] w-full 
                mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
                />
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Banner
