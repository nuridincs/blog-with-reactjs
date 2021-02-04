import React from 'react';
import CardProduct from './CardProduct';
import { useSelector } from 'react-redux';
import './Product.css';

const Product = (props) => {
  const order = useSelector((state) => state.totalOrder);

  return (
    <>
      <div className="header">Total Cart = {order}</div>

      <CardProduct />
    </>
  );
};

export default Product;
