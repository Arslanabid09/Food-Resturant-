import React from 'react'
import EShop from '../assets/Food_Assets/assets/shop/e-shop.png';
import appStore from '../assets/Food_Assets/assets/shop/appstore.png';
import GooglePlay from '../assets/Food_Assets/assets/shop/googleplay.png';

const Footer = () => {
  return (
    <footer className='bg-amber-500 absolute   h-auto min-h-[70%]
        flex md:flex-row flex-col-reverse justify-between items-center
        gap-y-10  py-10
    '>
        <div className='space-y-3 md:w-1/2 w-full text-center'>
        <h1 className='text-3xl font-semibold tracking-wider text-slate-800'>Download Mobile App and</h1>
        <h2 className='font-extrabold text-5xl tracking-wider text-neutral-700'>Save Up To 20%</h2>
        <p className=' w-10/12 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore magni, exercitationem sed necessitatibus totam minus.</p>
        <div className='flex md:flex-row  justify-center items-center gap-y-2 space-x-2'>
            <img className='w-36  cursor-pointer object-contain ' src={appStore} alt="" />
            <img className='w-36 cursor-pointer object-contain' src={GooglePlay} alt="" />
        </div>
        </div>

        <div className=''> 
            <img src={EShop} className='w-4/5 mx-auto object-contain' alt="" />
        </div>
    </footer>
  )
}

export default Footer