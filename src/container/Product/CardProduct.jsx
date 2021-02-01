import React, { Component, Fragment } from 'react';
import './Product.css';

class Product extends Component {
  state = {
    order: 0
  }

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  }

  handlePlus = () => {
    this.setState({
      order: this.state.order + 1,
    },() => {
      this.handleCounterChange(this.state.order)
    });
  }

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState({
        order: this.state.order - 1,
      },() => {
        this.handleCounterChange(this.state.order)
      });
    }
  }

  render() {
    return (
      <div className="card">
        <div>Bumbu Dapur</div>
        <div>1 gr</div>
        <div className="columns">
          <button onClick={this.handleMinus}>-</button>
          <div>{this.state.order}</div>
          <button onClick={this.handlePlus}>+</button>
        </div>
      </div>
    )
  }
}

export default Product;