import React from 'react'
import AboutImg from '../../assets/Food_Assets/assets/about/about-1.png';
import icon1 from '../../assets/Food_Assets/assets/about/pizza.png'
import icon2 from '../../assets/Food_Assets/assets/about/salad.png'
import icon3 from '../../assets/Food_Assets/assets/about/delivery-bike.png'
import {Service} from '../index';
import {Button} from '../../Components';
const About = () => {
  return (
    <section className='p-4 text-center bg-blue-40 relative'>
        <div className='space-y-5'>
          <h1 className='text-3xl md:text-4xl md:w-3/5 mx-auto text-white font-semibold'>
            The burger tastes better when you eat it with your family
          </h1>
          <p className='text-neutral-300 italic font-semibold md:text-lg md:w-2/3 mx-auto'>
            Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus
            feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis
            in integer metus
          </p>
          <Button label={'Explore More'} className={'w-52'} />
          
        </div>

        {/* Image and Overlay */}
        <div className='relative mt-7'>
          <img src={AboutImg} className=' md:w-3/5 mx-auto object-cover ' alt="About us img" loading='lazy' />
          {/* Yellow div with 40% height of the image */}
          <div className='   bg-yellow-400 w-full min-h-[40%] h-auto z-30 flex flex-col md:flex-row md:justify-around items-center  rounded-md'>
            <div >
              <Service img={icon1} title={'original'} paragraph={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio eius aut commodi.'} />
            </div>
            <div><Service img={icon2} title={'Quality food'} paragraph={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio eius aut commodi.'} /></div>
            <div><Service  img={icon3} title={'fast delivery'} paragraph={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio eius aut commodi.'} /></div>
          </div>
        </div>
      </section>
  )
}

export default About