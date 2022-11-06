import ReactDOM from 'react-dom';
import React from 'react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {state, AddPost, UpdateText, subscribe, ObserverType} from "./redux/state";

export let rerenderEntireTree = () => {


    ReactDOM.render(

        <React.StrictMode>
            <App state={state} addPost={AddPost} updateText={UpdateText}/>

        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderEntireTree()



subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
