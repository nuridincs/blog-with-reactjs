import React from 'react';
import Counter from '../../../component/Counter/Counter';
import './Product.css';

const Product = () => {
  return (
    <div className="container p-5">
      <div className="card-item">
        <img src="https://via.placeholder.com/170" alt="Avatar" />
        <div className="info p-5">
          <div>Bumbu Dapur</div>
          <div>1 gr</div>
        </div>
        <Counter />
      </div>
    </div>
  );
};

export default Product;
