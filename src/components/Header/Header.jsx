import React from 'react';
import Form from './Form/Form';
import s from './Header.module.css';







const Header = () => {
    return (
        <header className={s.header}>

            <div className={s.header__inner}>

                <img className={s.header__logo} src="https://via.placeholder.com/120x30" />

                <Form />

                <a className={s.header__link} href="#">Забыли пароль?</a>
            </div>

        </header>)
}


export default Header;
