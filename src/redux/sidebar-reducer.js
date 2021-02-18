//для иницилизации ветки в store если данные не прийдут
import React from "react";

let initialState = {
    users:
        {
            id: 1,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAKxP8ZI4XF374UokrFU56J3LUAe1miVGQg&usqp=CAU",
            photo: "https://via.placeholder.com/150",
            lastName: " lastName",
            firstName: " firstName",
            status: "status",

        }
    ,

    social: [
        {
            id: 1,
            icon: "https://cdn3.iconfinder.com/data/icons/peelicons-glyph/512/facebook__social__media_social__media-128.png",
            link: "https://uk-ua.facebook.com/",
        },
        {
            id: 2,
            icon: "https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-256.png",
            link: "https://www.instagram.com/",
        },
        {
            id: 3,
            icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-256.png",
            link: "https://twitter.com/",
        }
    ],
};


const sidebarReducer = (state = initialState, action) => {
    return state;

}


export default sidebarReducer;