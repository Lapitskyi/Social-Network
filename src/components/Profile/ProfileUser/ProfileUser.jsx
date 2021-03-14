import React from 'react';
import s from "./ProfileUser.module.css"
import socialIcon from '../../../assets/images/socialIcon.svg'
import userPhoto from "../../../assets/images/userPhoto.svg";


const ProfileUser = (props) => {


    return (
        <>
            {!props.profile && <>
                <img className={s.img}
                     src={props.users.img}/>
                <div className={s.about}>
                    <img className={s.photo} src={props.users.photo} alt='photo'/>
                    <h2 className={s.fio}>{props.users.lastName}{props.users.firstName}</h2>
                    <p className={s.text}> {props.users.status}</p>
                </div>


                <ul className={s.social}>
                    {
                        props.users.social.map((social) =>
                            <li className={s.social__item} key={social.id}>
                                <a className={s.social__link} href={social.link}>
                                    <img className={s.social__img} src={social.icon}/>
                                </a>
                            </li>)
                    }
                </ul>
            </>
            }
            {props.profile && <>
                <img className={s.img}
                     src={props.users.img}/>
                <div className={s.about}>

                    <img className={s.photo}
                         src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto}
                         alt='photo'/>
                    <h2 className={s.fio}>{props.profile.fullName}</h2>
                    <p className={s.text}> {props.profile.aboutMe}</p>
                </div>


                <ul className={s.social}>
                    {Object.keys(props.profile.contacts).map((social) =>
                        <li className={s.social__item} key={social}>
                            <a className={s.social__link} href={props.profile.contacts[social]}>
                                <img className={s.social__img} src={social.icon !=null ? social.icon: socialIcon}/>

                            </a>
                        </li>)
                    }
                </ul>
            </>
            }

        </>


    )
}


export default ProfileUser;