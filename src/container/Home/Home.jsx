import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogHooks from '../Blog/BlogHooks';
import Blog from '../Blog/Blog';
import HomeComp from '../../component/Home/Home';
import '../../index.css';

class Home extends Component {
  state = {
    showComponent: true,
    dataBlog: []
  }

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
        {/* <LifeCycleComp /> */}
        <Blog />
        {/* <HomeComp /> */}
      </div>
    )
  }
}

export default Home;