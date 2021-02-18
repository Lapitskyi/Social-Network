import React from 'react';
import {connect} from "react-redux";
import UserData from "./UserData";


let mapStateToProps = (state) => {

    return {
        social: state.sideBar.social,
        users: state.sideBar.users

    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

const UserDataContainer = connect(mapStateToProps, mapDispatchToProps)(UserData);

export default UserDataContainer;