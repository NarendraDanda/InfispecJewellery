import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLinkedinIn,
    FaWhatsapp,
    FaWhatsappSquare,
}from "react-icons/fa"


 const FooterLinks = [
    {
        title:"Home",
        link:"/#"
    },
    {
        title:"About",
        link:"/#about"
    },
    {
        title:"Contact",
        link:"/#contact"
    },
    {
        title:"Blog",
        link:"/#blog"
    }
];
const FooterLinks1 = [
    {
        title:"RefundPolicy",
        link:"/#"
    },
    {
        title:"ShippingPolicy & Delivery",
        link:"/#shippingpolicy"
    },
    
    {
        title:"FAQ",
        link:"/#faq"
    }
]

const Footer = () => {
  return (
    <div className='relative overflow-hidden min-h-[350px]
    sm:min-h-[400px] bg-red-50' >
        <h1 className='text-center mb-10 max-w-[600px] text-4xl font-bold mx-auto'>InfiSpec Innovations Pvt.Ltd.</h1>
      <div className='container'>
        <div className='flex md:grid-cols-3 pv-44 pt-5'>
             {/* contact */}
             <div className='grid grid-cols-2 sm:grid-cols-3
             col-span-2 md:pl-10'>
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-semibold 
                    sm:text-left text-justify mb-3'>
                        Contact
                    </h1>
                    <ul className='flex flex-col gap-3'>
                        {
                            FooterLinks.map((link)=>(
                                <li className='cursor-pointer hover:text-primary 
                                hover:translate-x-1 duration-300
                                text-gray-600'
                                key={link.title}>
                                    <span>{link.title}</span>
                                </li>
                            ))
                        }
                    </ul>
                    <div>
                        <div className='flex ietms-center gap-3 py-4'>
                            <a href="#">
                                <FaInstagram className='text-3l'/>
                            </a>
                            <a href="#">
                                <FaLinkedinIn className='text-3l'/>
                            </a>
                            <a href="#">
                                <FaWhatsappSquare className='text-3l'/>
                            </a>
                        </div>
                    </div>
                </div>
             </div>
             {/* More Information */}
             <div className='grid grid-cols-2 sm:grid-cols-3
             col-span-2 md:pl-10'>
            <div className='py-8 px-4'>
            <h1 className='sm:text-3xl text-ml font-semibold 
                    sm:text-left text-justify mb-3'>
                        More Information
                    </h1>
                    <ul className='flex flex-col gap-3'>
                        {
                            FooterLinks1.map((link)=>(
                                <li className='cursor-pointer hover:text-primary 
                                hover:translate-x-1 duration-300
                                text-gray-600'
                                key={link.title}>
                                    <span>{link.title}</span>
                                </li>
                            ))
                        }
                    </ul>
            </div>
        </div>
        {/* Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3
             col-span-2 md:pl-10'>
            <div className='py-8 px-4'>
            <h1 className='sm:text-3xl text-xl font-semibold 
                    sm:text-left text-justify mb-3'>
                       Products
                    </h1>
                    <ul className='flex flex-col gap-3'>
                        {
                            FooterLinks1.map((link)=>(
                                <li className='cursor-pointer hover:text-primary 
                                hover:translate-x-1 duration-300
                                text-gray-600'
                                key={link.title}>
                                    <span>{link.title}</span>
                                </li>
                            ))
                        }
                    </ul>
            </div>
        </div>
        {/* Aboutus */}
        <div className='grid grid-cols-2 sm:grid-cols-3
             col-span-2 md:pl-10'>
            <div className='py-8 px-4'>
            <h1 className='sm:text-3xl text-ml font-semibold 
                    sm:text-left text-justify mb-3'>
                       About Us
                    </h1>
                    <ul className='flex flex-col gap-3'>
                        {
                            FooterLinks1.map((link)=>(
                                <li className='cursor-pointer hover:text-primary 
                                hover:translate-x-1 duration-300
                                text-gray-600'
                                key={link.title}>
                                    <span>{link.title}</span>
                                </li>
                            ))
                        }
                    </ul>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
