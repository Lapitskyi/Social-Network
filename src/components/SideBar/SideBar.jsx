import React from 'react';
import s from "./SideBar.module.css"

import NavMenu from "./NavMenu/NavMenu";
import ProfileUser from "../Profile/ProfileUser/ProfileUser";




const SideBar = (props) => {

    return (
        <div className={s.sidebar}>
            <ProfileUser profile={props.profile} users={props.users}/>
            <NavMenu/>
        </div>
    )


}


export default SideBar;