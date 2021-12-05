import React from "react";
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/Dialogs-container";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*' element={<DialogsContainer />}/>;
                    <Route path='/profile/*' element={<Profile />}/>;
                    <Route path='/users/*' element={() => <div>users</div>}/>;5
                </Routes>
            </div>
        </div>
    );
}

export default App;