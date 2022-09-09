import ReactDOM from 'react-dom';
import React from 'react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export type DialogsTypeArr = Array<DialogsType>

type DialogsType = {
    id: number,
    name: string
}


const dialogs:DialogsTypeArr = [

    {id:1, name: "Andrei"},
    {id:2, name: "Valera"},

]

export type MessagesTypeArr = Array<MessagesType>

type MessagesType = {
    id: number,
    message: string
}


const messages:MessagesTypeArr = [

    {id: 1, message: "Hello"},
    {id: 2, message: "How are you"},

]

export type PostDataArr = Array<PostDataType>

type PostDataType = {
    id: number,
    message: string
}


const postData:PostDataArr = [

    {id: 1, message: "HI"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Thanks"}
]





ReactDOM.render(




  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} postData={postData}/>
	
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
