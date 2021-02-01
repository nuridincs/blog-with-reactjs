import React, { Component } from "react";
import './LifeCycle.css';

class LifeCycleComp extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      count: 1
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({
        count: 2
      })
    }, 3000)
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return true;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count > 4) return false;
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  counterChange = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    console.log('render');
    return (
      <button className="btn" onClick={this.counterChange}>Button Component {this.state.count}</button>
    )
  }
}

export default LifeCycleComp;