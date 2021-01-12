import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";


const SocialItem = (props) => {
    return (
        <li className={s.social__item}>
            <a className={s.social__link} href={props.link}>
            <img className={s.social__img} src={props.icon}/></a>
        </li>
    )
};


const UserItem = (props) => {
    return (
        <div className={s.about}>
            <img className={s.photo} src={props.photo} alt='photo'/>
            <h2 className={s.fio}>{props.lastName}{props.firstName}</h2>
            <p className={s.text}> {props.status}</p>
        </div>
    )
};


const NavBar = (props) => {


    let state = props.store.getState().navBar;

    let userArray = state.users.map((user) =>
        <UserItem
            id={user.id}
            photo={user.photo}
            lastName={user.lastName}
            firstName={user.firstName}
            status={user.status}

        />
    )

    let socialArray = state.social.map((social)=>
        <SocialItem
        id={social.id}
        icon={social.icon}
        link={social.link}
        />
    )


    return <nav className={s.nav}>

        <img className={s.img}
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAKxP8ZI4XF374UokrFU56J3LUAe1miVGQg&usqp=CAU"/>

        <div>

            {userArray}

            <ul className={s.social}>

                {socialArray}

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


export default NavBar;