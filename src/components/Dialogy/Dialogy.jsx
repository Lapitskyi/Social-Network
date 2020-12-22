import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogy.module.css';


let dialogyData = [
    { id: 1, name: "Andrei" },
    { id: 2, name: "Natasha" },
    { id: 3, name: "Igor" },
    { id: 4, name: "Sasha" },
]

let messageData = [
    { id: 1, massege: "Hi" },
    { id: 2, massege: "How a you" },
    { id: 3, massege: "Yo" },
    { id: 4, massege: "Kak del?" },
]


const UserItem = (props) => {

    let path = "/dialogy/" + props.id;
    return (

        <li className={s.userItem}>
            <NavLink to={path} className={s.userLink} activeClassName={s.active}>
                <img className={s.userImg} src="https://via.placeholder.com/70" />
                <div className={s.userName}> {props.name}</div>
            </NavLink>
        </li>
    )
};


const Messages = (props) => {
    return (
        <li className={s.massegesItem}>{props.message}</li>
    )
};


const Dialogy = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.userList}>
                <UserItem name={dialogyData[0].name} id={dialogyData[0].id} />
                <UserItem name={dialogyData[1].name} id={dialogyData[1].id} />
                <UserItem name={dialogyData[2].name} id={dialogyData[2].id} />
                <UserItem name={dialogyData[3].name} id={dialogyData[3].id} />
            </ul >

            <ul className={s.massegesList}>
                <Messages message={messageData[0].massege} id={messageData[0].id} />
                <Messages message={messageData[1].massege} id={messageData[1].id} />
                <Messages message={messageData[2].massege} id={messageData[2].id} />
                <Messages message={messageData[3].massege} id={messageData[3].id} />

            </ul>
        </div >
    )
}

export default Dialogy;