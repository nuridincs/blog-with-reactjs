import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './stores/store';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home';
import Product from './container/pages/Product/Product';
import LifeCycleComp from './container/pages/LifeCycleComp/LifeCycleComp';
import Blog from './container/pages/Blog/Blog';
import Detail from './container/pages/Blog/Detail';
import Header from './component/Layout/Header';

const AppRoute = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/detail-post/:id" component={Detail} />
        <Route path="/about" component={LifeCycleComp} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRoute />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
