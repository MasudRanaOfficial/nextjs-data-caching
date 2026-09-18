import React from 'react';

const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products");
  if(!res.ok) {
    throw new Error("The products are not found!")
  }

  return res.json();
}

const ProductsPage = async () => {

  const products = await getProducts()
  return (
    <div>
      Products: {products.length}
    </div>
  );
};

export default ProductsPage;