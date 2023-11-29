import React from 'react';

const Cart = ({ cart, total }) => {
  return (
    <div className="box p-4 rounded-lg w-80 flex flex-col  items-center">
      <h2 className="text-center text-2xl font-semibold mb-4">Cart</h2>
      <div className="flex flex-col justify-between h-60 overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">No products is added</p>
        ) : (
          <ul className="flex flex-col items-center">
            {cart.map((item) => (
              <li
                key={item.product.id}
                className="flex items-center justify-between bg-teal-500 text-white font-semibold mb-2 p-2 rounded-md hover:bg-teal-600 transition-all duration-300"
              >
                <span className='mx-8'>{item.product.name}</span>
                <p>{item.product.price} x {item.quantity}</p>
              </li>
            ))}
          </ul>
        )}
        <p className="flex items-center justify-between bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-semibold p-2 rounded-md mt-4 hover:bg-gradient-to-r hover:from-teal-600 hover:to-indigo-600 transition-all duration-300">
          <span>Total :</span>
          <span>{total}</span>
        </p>
      </div>
    </div>
  );
};
export default Cart;