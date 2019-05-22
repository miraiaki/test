import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom'
import 'antd/dist/antd.css';
//组件
import store from './ruduce/store.js'
import { Provider } from "react-redux";
import Nav from "./router/router.js";
import "./css/reset.css";
import "./auto-size.js"

ReactDOM.render((
    <Provider store={store}>
        < Nav />
    </Provider>
), d1)