import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"

import store from './redux/redux-store'
import StoreContext from "./StoreContecxt";


let rerenderEntireTre = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>

                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>

            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTre(store.getState());

store.subscribe (() => {
    let state = store.getState();
    rerenderEntireTre(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
