import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Pagination from './Pagination/Pagination';
import Story from './Story/Story';
import s from './Profile.module.css';



const Profile = () => {
    return (
        <div>
            <Story />
            <MyPosts />
            <Pagination />
        </div>)
}


export default Profile;