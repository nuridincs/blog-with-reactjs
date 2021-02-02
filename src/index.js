import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Provider} from 'react-redux';
import './index.css';
import {store} from './stores/store';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home';
import BlogHooks from './container/Blog/BlogHooks';
const AboutComponent = () => {
  return (
    <h1>About pages</h1>
  )
}

const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={AboutComponent} />
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={BlogHooks} />
      </Switch>
    </Router>
  )
}
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
