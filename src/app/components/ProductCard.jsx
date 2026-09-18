import Image from 'next/image';
import React from 'react';

const ProductCard = ({product}) => {

  const { title, description, price, category, image, rating} = product;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image src={image} height={500} width={500} alt='Product Image'></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{price}</div>
          <div className="badge badge-outline">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;