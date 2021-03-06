import React from 'react';
import './App.css';


import Footer from './components/Footer/Footer';

import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom"
import Settings from "./components/Settings/Settings";
import DialogyContainer from "./components/Dialogy/DialogyContainer";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import SideBarContainer from "./components/SideBar/SideBarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {

    return (

        <div className="app-wrapper">
            <HeaderContainer/>
            <SideBarContainer />
            <div className="app-wrapper-content">
                <Route path='/profile/:userId'
                      render={() => <ProfileContainer />}/>

                <Route path='/dialogy'
                       render={() => <DialogyContainer />}/>

                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
            <Footer/>
        </div>

    );
}

export default App;
