import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogy from "./components/Dialogy/Dialogy";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import { BrowserRouter, Route } from "react-router-dom"
import Settings from "./components/Settings/Settings";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path='/profile' component={Profile} />
                    <Route path='/dialogy' component={Dialogy} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
                <Footer />
            </div>
        </BrowserRouter>


    );
}

export default App;
