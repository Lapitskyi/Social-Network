import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
     setCurrentPage,
     toggleProgressIsFollow,
    getUsers, getCurrentPage, getFollow, getUnFollow
} from "../../redux/users-reducer";

import Preloader from "../Preloader/Preloader";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getCurrentPage(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> :
                    <Users
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        pageSize={this.props.pageSize}
                        totalCount={this.props.totalCount}
                        currentPage={this.props.currentPage}
                        getFollow={this.props.getFollow}
                        getUnFollow={this.props.getUnFollow}
                        toggleProgressIsFollow={this.props.toggleProgressIsFollow}
                        isFollow={this.props.isFollow}
                    />}
            </>)
    }

}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollow: state.usersPage.isFollow
    }
};


export default connect(mapStateToProps,
    {
        getFollow,
        getUnFollow,
        setCurrentPage,
        getUsers,
        getCurrentPage,
        toggleProgressIsFollow
    }
)(UsersContainer);