/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Counter.css';

const Counter = () => {
  const { totalOrder } = useSelector((state) => state.common);
  const dispatch = useDispatch();

  const handlePlus = () => dispatch({ type: 'INCREMENT_ORDER' });
  const handleMinus = () => dispatch({ type: 'DECREMENT_ORDER' });

  return (
    <div className="flex">
      <button className="btn-count" onClick={handleMinus}>
        -
      </button>
      <div className="count">{totalOrder}</div>
      <button className="btn-count" onClick={handlePlus}>
        +
      </button>
    </div>
  );
};

export default Counter;
