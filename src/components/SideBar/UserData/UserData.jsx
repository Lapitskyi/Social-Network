import React from 'react';
import s from "./UserData.module.css"


const UserData = (props) => {

    return (
        <>
            <img className={s.img}
                 src={props.users.img}/>
            <div className={s.about}>
                <img className={s.photo} src={props.users.photo} alt='photo'/>
                <h2 className={s.fio}>{props.users.lastName}{props.users.firstName}</h2>
                <p className={s.text}> {props.users.status}</p>
            </div>


            <ul className={s.social}>
                {
                    props.social.map((social) =>
                        <li className={s.social__item} key={social.id}>
                            <a className={s.social__link} href={social.link}>
                                <img className={s.social__img} src={social.icon}/>
                            </a>
                        </li>)
                }
            </ul>
        </>
    )
}


export default UserData;