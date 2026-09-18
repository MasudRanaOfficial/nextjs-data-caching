import React from 'react';
import ProductCard from '../components/ProductCard';

const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {cache: 'force-cache'});
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

      <div className='grid grid-cols-4 gap-10'>
        {
          products.map(
            product => <ProductCard 
            key={product.id} 
            product={product}
            ></ProductCard>
          )
        }
      </div>
    </div>
  );
};

export default ProductsPage;