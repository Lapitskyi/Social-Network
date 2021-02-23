import React from 'react';
import s from "./NavMenu.module.css"
import {NavLink} from "react-router-dom";


const NavMenu = () => {
    const nav = [
        {id:1, title: "Profile", path:"/profile"},
        {id:2, title:'Message',path:"/dialogy"},
        {id:3, title:'News',path:"/news"},
        {id:4, title:'Music',path:"/music"},
        {id:5, title:'Settings',path:"/settings"},
        {id:6, title:'Users',path:"/users"},
    ]

    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                {nav.map((item)=>
                    <li className={s.item} key={item.id}>
                        <NavLink className={s.link} activeClassName={s.active} to={item.path}>{item.title}</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}


export default NavMenu;