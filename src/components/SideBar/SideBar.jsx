import React from 'react';
import s from "./SideBar.module.css"

import NavMenu from "./NavMenu/NavMenu";
import UserDataContainer from "./UserData/UserDataContainer";


const SideBar = (props) => {

    return (
        <div className={s.sidebar}>
            <UserDataContainer/>
            <NavMenu/>
        </div>
    )


}


export default SideBar;