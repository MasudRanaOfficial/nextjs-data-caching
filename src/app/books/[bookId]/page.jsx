import React from "react";

export const generateStaticParams = async() => {
  const res = await fetch("http://localhost:5000/books");
  const books = await res.json();

  return books.slice(0, 3).map(book => ({bookId: book.id}))
}

const BookDetailPage = async ({ params }) => {
  const { bookId } = await params;

  const res = await fetch(`http://localhost:5000/books/${bookId}`);
  const book = await res.json();

  return (
    <div>
      <h3>Title: {book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>Category: {book.category}</p>
      <p>Price: {book.price}</p>
      <p>Language: {book.language}</p>
    </div>
  );
};

export default BookDetailPage;
