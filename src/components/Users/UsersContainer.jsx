import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follov,
    setCurrentPage,
    toggleIsFetching,
    setUsers,
    setUserTotalCount,
    unfollov, toggleProgressIsFollow
} from "../../redux/users-reducer";

import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../API/api";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize ).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
                this.props.setUserTotalCount(data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getCurrentPage(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            });
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
                        follov={this.props.follov}
                        unfollov={this.props.unfollov}
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
        follov,
        unfollov,
        setUsers,
        setCurrentPage,
        setUserTotalCount,
        toggleIsFetching,
        toggleProgressIsFollow
    }
)(UsersContainer);