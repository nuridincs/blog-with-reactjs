import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import Blog from '../Blog/Blog';

class Home extends Component {
  state = {
    showComponent: true,
    dataBlog: []
  }

  // componentDidMount() {
  //   this.setShow();
  // }

  setShow = () => {
    setTimeout(() => {
      this.setState({
        showComponent: false
      })
    }, 5000)
  }

  render() {
    return (
      <div>
        {/* <Product /> */}
        {/* <p>LifeCycle</p>
        <hr/>
        {
          this.state.showComponent
          ?
          <LifeCycleComp />
          : null
        } */}
        <Blog />
      </div>
    )
  }
}

export default Home;