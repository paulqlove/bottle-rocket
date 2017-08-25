import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './styles/main.css';
import 'whatwg-fetch';
import { Provider } from "react-redux";
import store from "./store/index.jsx";
import configureStore from './store/configureStore.jsx';



const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>, document.getElementById('root')
  );
};

render(App);
