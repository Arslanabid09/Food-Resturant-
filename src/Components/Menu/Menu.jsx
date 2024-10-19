import React from 'react'
import { mockData } from './MockData'
import {Cards} from '../index'

const Menu = () => {
  return (
    <section className='my-16 space-y-10'>
      <div className='text-center space-y-5'>
        <h1 className='text-4xl md:text-6xl tracking-wide font-extrabold text-WHITE'>Our crazy <span className='text-yellow-400'>burgers</span></h1>
        <p className='italic md:text-lg  w-3/4 md:w-1/2 mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nemo corporis voluptates quisquam obcaecati eveniet.</p>
      </div>
      {/* cards */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center mx-auto">
      {mockData.map((item) => (
        <Cards key={item.id} data={item} />
      ))}
      </div>
    </section>
  )
}

export default Menu