import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, StateType, subscribe, updatePostText} from "./redux/state";
import state from './redux/state'

let rerenderTree = (state:StateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updatePostText={updatePostText}
        />,
        document.getElementById('root')
    );
}
rerenderTree(state)

subscribe(rerenderTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

