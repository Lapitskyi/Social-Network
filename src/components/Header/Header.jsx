import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <div className={s.headerInner}>
            <img className={s.headerLogo} src="https://via.placeholder.com/120x30" />
            <ul className={s.header__list}>
                <li className={s.header__item}>
                    <a className={s.header__link} href="№">Главная</a>
                </li>
                <li className={s.header__item}>
                    <a className={s.header__link} href="№">Обо мне </a>
                </li>
                <li className={s.header__item}>
                    <a className={s.header__link} href="№">Профиль</a>
                </li>
            </ul>
        </div>

    </header>
}


export default Header;
