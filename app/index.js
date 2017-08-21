import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './styles/main.css';
import 'whatwg-fetch';
import { Provider } from "react-redux";
import store from "./store/index.jsx";

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
