import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import HomeComp from '../../component/Home/Home';
import '../../index.css';

class Home extends Component {
  state = {
    showComponent: true,
    dataBlog: [],
  };

  setShow = () => {
    setTimeout(() => {
      this.setState({
        showComponent: false,
      });
    }, 5000);
  };

  render() {
    return <HomeComp />;
  }
}

export default Home;
