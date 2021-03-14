import React from 'react';
import {connect} from "react-redux";
import SideBar from "./SideBar";


const SideBarContainer = (props) => {
    return(
        <SideBar profile={props.profile} users={props.users} />
    )
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        users:state.profilePage.users,
    }
}


export default connect(mapStateToProps,{})(SideBarContainer)