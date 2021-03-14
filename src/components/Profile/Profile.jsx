import React from 'react';

import Pagination from './Pagination/Pagination';
import Story from './Story/Story';

import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {

    return (
        <div>
            <Story />
            <MyPosts posts={props.posts} />
            <Pagination/>
        </div>)
}


export default Profile;