"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';
import { UserContext } from '../context/UserContext';

const BookCard = ({book}) => {

  const user = use(UserContext);

  console.log("user in bookCard:", user)

  const {title, image, description} = book;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="overflow-hidden bg-base-200">
        <Image
          src={image}
          width={500}
          height={500}
          alt="Book Image"
          className="h-64 w-full object-cover"
        ></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info">Buy Now</button>
          <Link href={`/books/${book.id}`}>
            <button className="btn btn-success">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;