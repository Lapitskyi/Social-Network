import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";

import {setUserProfile} from "../../redux/profile-reducer";


import {withRouter} from "react-router-dom";
import {profileAPI} from "../../API/api";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        profileAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data)
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