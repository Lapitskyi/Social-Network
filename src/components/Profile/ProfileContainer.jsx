import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";

import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
            this.props.getProfile(userId);
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

export default connect(mapStateToProps, {
    getProfile

})(withRouter(ProfileContainer));