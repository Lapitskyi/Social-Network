import React from 'react';
import {connect} from "react-redux";
import Users from "./UsersC";
import {follovAC, setCurrentPage, setUsersAC, setUserTotalCount, unfollovAC} from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalCount:state.usersPage.totalCount,
        currentPage:state.usersPage.currentPage
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
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPage(pageNumber))
        },
        setUserTotalCount:(totalCount)=>{
            dispatch(setUserTotalCount(totalCount))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);