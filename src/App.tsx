import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DialogsTypeArr, MessagesTypeArr, PostDataArr} from "./index";
import Header from "./components/Header/Header";


type PropsType = {

    postData: PostDataArr,
    dialogs: DialogsTypeArr,
    messages: MessagesTypeArr,

}



const App = (props:PropsType) => {
    return (

        <BrowserRouter>
            <div id="wrapper">
                <Header/>
                <Sidebar/>
                <Routes>

                    <Route path="/profile"  element={<Profile postData={props.postData}/>} />
                    <Route path="/dialogs"  element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
                </Routes>

            </div>
       </BrowserRouter>
    )
        ;
}


export default App;
