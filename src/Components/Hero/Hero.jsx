import React from 'react'
import image1 from '../Assets/badge@2x.png'
import image2 from '../Assets/data-aggregator@2x.png'
import image3 from '../Assets/rectangle-40@2x.png'
import Slider from "react-slick";

const ImageList=[
    {
        id:1,
        img: image1,
        title: "Infispec E-Commerce",
        description:"Where Your Brand story comes to Life."
    },
    {
        id:2,
        img: image2,
        title: "Upto 20% off on all Jewllery",
        description:"dhfhkasfhlkhsdl ahsdlfjh a;kjhkjhlkjh."
    },
    {
        id:3,
        img: image3,
        title: "Upto 20% off on all Jewllery",
        description:"dhfhkasfhlkhsdl ahsdlfjh a;kjhkjhlkjh."
    },
]

const Hero = () => {

    var settings = {
        dots:true,
        infinte:false,
        speed:800,
        slidesToScroll:1,
        autoplay:false,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:true,
        pauseOnFocus:true,
    };

  return (
    <div className='relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-red-50 flex justify-center items-center'>
        {/* background pattern */}
      {/* <div className='h-[700px] w-[700px] bg-primary/40
      absolute -top-1/2 right-0 rounded-3xl rotate-45 
      -z-9'>
      </div> */}
      {/* hero section */}
      <div className='container pb-8 sm:pb-0'>
      <Slider {...settings}>
        {ImageList.map((data)=>(
      <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* text content section */}
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center order-2 sm:order-1 relative z-10'>
                    <h1 data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once = "true"
                    className='text-4xl sm:text-5xl lg:text-6xl font-bold py-3'>{data.title}</h1>
                    <p data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay = "100"
                        className='text-sm'>
                       {data.description}
                    </p>
                    <div 
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay = "300"
                    >
                        <button className='bg-gradient-to-r from-purple-950
                         to-purple-900 hover:scale-105 
                         duration-200 text-white text-2xl py-2 px-6 '>
                         Lets Get Started
                        </button>
                    </div>
                </div>
                {/* image section */}
                <div className='order-1 sm:order-2'>
                    <div 
                    data-aos = "zoom-in"
                    data-aos-once = "true"
                    className='relative z-10'
                    >
                        <img src={data.img} alt="" 
                        className='w-[400px] h-[400px] sm:h-[450px] sm:[450px] sm:scale-125 
                        object-contain mx-auto'/>
                    </div>
                </div>
            </div>
        </div>
        ))}
      </Slider>
        
      </div>
    </div>
  )
}

export default Hero
