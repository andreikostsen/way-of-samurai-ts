import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = () => {
    return (

        <BrowserRouter>
            <div id="wrapper">
                <Header/>
                <Sidebar/>
                <Routes>
                    <Route path="/profile"  element={<Profile />} />
                    <Route path="/dialogs"  element={<DialogsContainer />} />
                </Routes>

            </div>
       </BrowserRouter>
    )
        ;
}


export default App;
