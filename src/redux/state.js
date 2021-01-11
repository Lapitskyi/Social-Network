import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";


let store = {
    _state: {
        dialogPage: {
            photos: [
                {id: 1, img: "https://via.placeholder.com/70"}
            ],

            dialogs: [
                {id: 1, name: "Andrei"},
                {id: 2, name: "Natasha"},
                {id: 3, name: "Igor"},
                {id: 4, name: "Sasha"},
            ],

            messages: [
                {id: 1, massege: "Hi"},
                {id: 2, massege: "How a you"},
                {id: 3, massege: "Yo"},
                {id: 4, massege: "*******"},
            ],
            newMessageText: ''
        },

        profilePage: {
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
            newPostText: ''
        }
    },

    _callSubscriber() {
        console.log('update');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {     // у action  должен быть {type:''}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);

        this._callSubscriber(this._state);

    }
}

// если функция только возвращает записует сокращенно




window.state = store;
export default store;