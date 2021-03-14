import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";

import {setUserProfile} from "../../redux/profile-reducer";
import * as axios from "axios";

import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data)
            console.log(response.data)
        });
    }


    render() {
        return <Profile {...this.props} profile={this.props.profile} users={this.props.users} posts={this.props.posts}/>
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        users:state.profilePage.users,
        posts:state.profilePage.posts,


    }
}


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));