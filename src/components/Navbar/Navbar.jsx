import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return <nav className={s.nav}>
        <img className={s.photo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAKxP8ZI4XF374UokrFU56J3LUAe1miVGQg&usqp=CAU" />

        <div className={s.about}>
            <img className={s.img} src="https://via.placeholder.com/150" />
            <h2 className={s.fio}>Лапицкий Александр</h2>
            <p className={s.text}> front-end разработка</p>
            <ul className={s.social}>
                <li className={s.social__item}>
                    <img className={s.social__img} src="https://cdn3.iconfinder.com/data/icons/peelicons-glyph/512/facebook__social__media_social__media-128.png" />
                </li>
                <li className={s.social__item}>
                    <img className={s.social__img} src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Pinterest_glyph_svg-128.png" />
                </li>
                <li className={s.social__item}>
                    <img className={s.social__img} src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-128.png" />
                </li>
            </ul>

            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to="/profile">Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to="/dialogy">Message</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to="/news">News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to="/music">Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to="/settings">Settings</NavLink>
                </li>
            </ul>
        </div>
    </nav>
}


export default Navbar;