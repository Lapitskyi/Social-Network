import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom"
import Settings from "./components/Settings/Settings";
import DialogyContainer from "./components/Dialogy/DialogyContainer";


const App = (props) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <NavBar store={props.store}/>
            <div className="app-wrapper-content">
                <Route path='/profile'
                       render={() => <Profile  />}/>

                <Route path='/dialogy'
                       render={() => <DialogyContainer />}/>

                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
            <Footer/>
        </div>

    );
}

export default App;
