const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE = 'NEW-MESSAGE-TEXT';

//для иницилизации ветки в store если данные не прийдут
let initialState = {

    dialogs: [
        {id: 1, img: "https://via.placeholder.com/70", name: "Name1"},
        {id: 2, img: "https://via.placeholder.com/70", name: "Name2"},
        {id: 3, img: "https://via.placeholder.com/70", name: "Name3"},
        {id: 4, img: "https://via.placeholder.com/70", name: "Name4"},
    ],

    messages: [
        {
            id: 1,
            massege: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        },
        {id: 2, massege: "Lorem ipsum dolor sit amet, consectetur"},
        {id: 3, massege: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"},
        {id: 4, massege: "*******"},
    ],
    newMessageText: ''
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            let body = state.newMessageText;
            return  {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id:5,  massege:body}]
            };

        case NEW_MESSAGE:

            return  {...state, newMessageText: action.body};

        default:
            return state;
    }
}

export const addMassegeCreate = () => ({type: ADD_MESSAGE});
export const NewMessageTextCreate = (body) => ({
    type: NEW_MESSAGE, body: body
})


export default dialogsReducer;