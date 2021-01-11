const ADD_POST = 'ADD-POST';
const NEW_POST = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                date: "06.01.2020",
                likeCount: "0",
                dislikeCount: "0"
            };

            if (state.newPostText !== '') {
                state.posts.push(newPost);
                state.newPostText = '';
            }
            return state;

        case NEW_POST:
            state.newPostText = action.newText;
            return state;

        default:
            return state;

    }

}

export const addPostActionCreate = () => ({type: ADD_POST});
export const updateNewPostTextActionCreate = (text) => ({
    type: NEW_POST, newText: text
})

export default profileReducer;