import Image from 'next/image';
import React from 'react';

const BookCard = ({book}) => {

  const {title, image, description} = book;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className='overflow-hidden bg-base-200'>
        <Image 
        src={image}
        width={500}
        height={500}
        alt='Book Image'
        className='h-64 w-full object-cover'></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;