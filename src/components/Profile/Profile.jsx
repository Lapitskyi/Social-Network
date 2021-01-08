import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Pagination from './Pagination/Pagination';
import Story from './Story/Story';
import s from './Profile.module.css';



const Profile = (props) => {

    return (
        <div>
            <Story />
            <MyPosts state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
            <Pagination />
        </div>)
}


export default Profile;