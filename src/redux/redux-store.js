import {combineReducers, createStore} from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


//обьединение всех Reducer
let reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogsReducer,
    sideBar:sidebarReducer,
});

//создание store
let store = createStore(reducers);

export default store;