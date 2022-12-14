import ReactDOM from 'react-dom';
import React from 'react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store, {AppRootStateType} from "./redux/redux-store";
import {Provider} from "react-redux";


export let rerenderEntireTree = (state: AppRootStateType) => {


    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );

}

rerenderEntireTree(store.getState())



store.subscribe(()=>rerenderEntireTree(store.getState()))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
