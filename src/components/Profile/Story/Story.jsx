import React from "react";
import s from "./Story.module.css"



const StoryItem = (props) => {
    return (
        <li className={s.storyItem}>
            <img className={s.storyImg} src="https://via.placeholder.com/140x195" alt="" />
        </li>
    )
};



const Story = () => {
    return (
        <ul className={s.storyList}>
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
        </ul>

    )
}




export default Story;