import {usersAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const NEW_POST = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

//для иницилизации ветки в store если данные не прийдут
let initialState = {
    users:
        {
            id: 1,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAKxP8ZI4XF374UokrFU56J3LUAe1miVGQg&usqp=CAU",
            photo: "https://via.placeholder.com/150",
            lastName: " lastName",
            firstName: " firstName",
            status: "status",
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
        },
    posts: [
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "01.06.2020",
            likeCount: "2",
            dislikeCount: "1"
        },
        {id: 2, message: "Lorem ipsum dolor sit amet.", date: "01.07.2020", likeCount: "2", dislikeCount: "1"}
    ],
    newPostText: '',
    profile: undefined
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                date: "06.01.2020",
                likeCount: "0",
                dislikeCount: "0"
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        case NEW_POST: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }

        default:
            return state;
    }
}


export const addPostActionCreate = () => ({type: ADD_POST});
export const updateNewPostTextActionCreate = (text) => ({
    type: NEW_POST, newText: text
})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export default profileReducer;