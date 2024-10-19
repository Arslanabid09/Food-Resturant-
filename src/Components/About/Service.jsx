import React from 'react'

const Service = ({
    img,
    title,
    paragraph
}) => {
  return (
    <div className='flex flex-col items-center  py-3 '>
        <img src={img} loading='lazy' className='w-16 md:w-20 ' alt='img' />
        <h3 className='font-semibold  text-zinc-800 uppercase md:text-xl'>{title}</h3>
        <p className='w-64 font-semibold text-neutral-700 tracking-wider'>{paragraph}</p>
    </div>
  )
}

export default Service