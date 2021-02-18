
import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




let mapStateToProps = (state) => {

    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;