import React, { useState } from 'react';
import Cart from './Cart'
import ProductsList from './ProductsList';
const Products = [
  { id: 1, name: 'Product-1', price: 100,quantity: 0 },
  { id: 2, name: 'Product-2', price: 200, quantity: 0 },
  { id: 3, name: 'Product-3', price: 300, quantity: 0 },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem.quantity === 1) {
      setCart(cart.filter((item) => item.product.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div className="flex justify-around m-[20px] ">
      <ProductsList
        products={Products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <Cart cart={cart} total={calculateTotal()} />
    </div>
  );
};

export default App;