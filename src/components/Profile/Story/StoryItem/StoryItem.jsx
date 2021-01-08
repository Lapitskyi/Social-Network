import React from "react";
import s from "./StoryItem.module.css"

const StoryItem = (props) => {
    return (
        <li className={s.storyItem}>
            <img className={s.storyImg} src="https://via.placeholder.com/140x195" alt="" />
        </li>
    )
};

export default StoryItem;