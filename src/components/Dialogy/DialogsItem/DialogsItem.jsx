
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogsItem.module.css';






const DialogsItem = (props) => {

    let path = "/dialogy/" + props.id;
    return (
        <li className={s.userItem}>
            <NavLink to={path} className={s.userLink} activeClassName={s.active}>
                <img className={s.userImg} src={props.img} alt="photo" />
                <div className={s.userName}> {props.name}</div>
            </NavLink>
        </li>
    )
};

export default DialogsItem;