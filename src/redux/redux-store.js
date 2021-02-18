import {combineReducers, createStore} from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navBarReducer from "./navbar-reducer";


//обьединение всех Reducer
let reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogsReducer,
    navBar:navBarReducer,
});

//создание store
let store = createStore(reducers);

export default store;