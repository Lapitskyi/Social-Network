import React from 'react';
import {connect} from "react-redux";
import Users from "./UsersC";
import {follovAC, setUsersAC, unfollovAC} from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        follov: (userId) => {
            dispatch(follovAC(userId))
        },
        unfollov: (userId) => {
            dispatch(unfollovAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);