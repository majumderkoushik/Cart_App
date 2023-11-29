import React, { useState } from 'react';
import './App.css'

const ProductsList = ({ products, addToCart, removeFromCart }) => {
  const [productQuantities, setProductQuantities] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product);
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: (prevQuantities[product.id] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (product) => {
    if (productQuantities[product.id] > 0) {
      removeFromCart(product);
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product.id]: prevQuantities[product.id] - 1,
      }));
    }
  };

  return (
    <div className="box w-[55%] flex-col pb-8">
      <h2 className='text-center text-2xl font-semibold p-2'>Products</h2>
      <ul className='flex flex-col items-center'>
        {products.map((product) => (
          <li key={product.id} className='flex items-center justify-around bg-gradient-to-r from-teal-500 to-indigo-500  text-white font-semibold mb-2 w-[95%] '>
            <div className='flex justify-between w-36'>
              <span>{product.name}</span>
              <p>{product.price}</p>
            </div>
            <div className='h-14 flex justify-center items-center w-28'>
              <div className='w-full h-8  border-2 flex justify-around items-center bg-blue-400 border-black rounded-full'>
                <button className='my-3' onClick={() => handleAddToCart(product)}>+</button>
                <span>{productQuantities[product.id] || 0}</span>
                <button className='my-3' onClick={() => handleRemoveFromCart(product)}>-</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;