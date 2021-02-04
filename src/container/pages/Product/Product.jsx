import React from 'react';
import CardProduct from './CardProduct';
import { useSelector } from 'react-redux';
import './Product.css';

const Product = () => {
  const { totalOrder } = useSelector((state) => state.common);

  return (
    <>
      <div className="header">Total Cart = {totalOrder}</div>

      <CardProduct />
    </>
  );
};

export default Product;
