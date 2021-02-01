import React, { Component } from 'react';
import CardProduct from './CardProduct';
import './Product.css';

class Product extends Component {
  state = {
    order: 0
  }

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue
    })
  }

  render() {
    return (
      <>
        <div className="header">
          Total Cart = {this.state.order}
        </div>

        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
      </>
    )
  }
}

export default Product;