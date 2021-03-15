import React from 'react';

import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.header}>

            <div className={s.header__inner}>
                <img className={s.header__logo} src="https://via.placeholder.com/120x30"/>


                <div className={s.loginBlock}>
                    {props.isAuth ? props.login
                        : <NavLink className={s.header__link} to={"/login"}>Login</NavLink>
                    }
                </div>

            </div>

        </header>)
}


export default Header;
