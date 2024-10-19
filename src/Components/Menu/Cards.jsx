import React from 'react';
import { mockData } from './MockData';
import {Button} from '../../Components';

const Cards = ({data}) => {
  return (
        <div
          className="max-w-sm bg-white rounded-lg overflow-hidden relative shadow-lg"
        >
          <img
            className="rounded-t-lg object-cover w-full h-48 transition-transform duration-300 ease-in-out hover:scale-110 shadow-md"
            loading="lazy"
            src={data.image}
            alt={data.title}
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-900">
              {data.title}
            </h5>
            <p className="mb-3 font-normal text-center italic text-gray-700 dark:text-gray-400">
              {data.paragraph}
            </p>
            <Button label={'Order Now'} className={'w-full hover:bg-yellow-500'} />
          </div>

          {/* Price Badge with Wooden Background and Blur */}
          <div
            className="absolute top-0 left-0 bg-cover bg-center text-white px-4 py-2 bg-red-800 text-sm font-semibold"
            
          >
            {data.price}$
          </div>
        </div>
  );
};

export default Cards;
