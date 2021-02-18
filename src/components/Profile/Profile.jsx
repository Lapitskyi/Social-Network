import React from 'react';

import Pagination from './Pagination/Pagination';
import Story from './Story/Story';

import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div>
            <Story/>
            <MyPostsContainer />
            <Pagination/>
        </div>)
}


export default Profile;