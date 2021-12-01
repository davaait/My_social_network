import React from "react";
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import {Route, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/Dialogs-container";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Sidebar state={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>;
                    <Route path='/profile/*'
                           element={<Profile store={props.store}/>}/>;
                </Routes>
            </div>
        </div>
    );
}

export default App;