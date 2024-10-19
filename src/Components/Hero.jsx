import React from 'react'
import burger from '../assets/Food_Assets/assets/hero/hero-2.png';
import {Button} from '../Components';
const Hero = () => {
  return (
    <section className='w-full md:flex justify-around  text-center'>
    {/* Burger Image */}
    <img 
      src={burger} 
      className='md:w-[40%] animate-slide-right w-9/12  mx-auto md:mx-5 min-w-[60%] md:min-w-[40%]'  
      alt="Burger not found" 
      loading='lazy'
    />
    
    {/* Text Section */}
    <div className='space-y-5  my-20 animate-slide-left'>
      <h1 className='text-4xl md:text-5xl font-extrabold mx-auto  text-white'>New Burger <span className='text-yellow-400'>With Onion</span></h1>
      <p className='text-white  font-semibold md:w-[70%] mx-auto'>Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus</p>
      <Button label={'Order Now'} className={'px-10 py-3'} />
    </div>
  </section>
  )
}

export default Hero