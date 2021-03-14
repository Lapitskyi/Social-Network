import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follov,
    setCurrentPage,
    toggleIsFetching,
    setUsers,
    setUserTotalCount,
    unfollov
} from "../../redux/users-reducer";
import * as axios from "axios";
import Preloader from "../Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
            this.props.setUserTotalCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
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
        isFetching: state.usersPage.isFetching
    }
};


export default connect(mapStateToProps,
    {
        follov,
        unfollov,
        setUsers,
        setCurrentPage,
        setUserTotalCount,
        toggleIsFetching
    }
)(UsersContainer);