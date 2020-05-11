// src/js/store/index.js
import { createStore, applyMiddleware } from "redux";
import rootReducers from "../reducers/index";
// import login_Reducer from '../reducers/login';
// import {postsList} from '../constants/textures'

import thunk from 'redux-thunk';
import {logger} from 'redux-logger'
const middleware = [thunk];

//////////////////////////////////// local storage persistent store//////////////////////////////
function saveToLocalStorage(state){
        try{
const serializeState=JSON.stringify(state)
localStorage.setItem('state',serializeState)
    }catch(e){
console.log(e)
    }
}
function loadFromLocalStorage(){
    
    const serializeState=localStorage.getItem('state')
    try{
     if (serializeState==null) return undefined
     return JSON.parse(serializeState)
    }catch(e){
        console.log(e)
        return undefined
    }
}
const store = createStore(rootReducers,
  loadFromLocalStorage(),
  applyMiddleware(...middleware,logger))
 //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
store.subscribe(()=>
saveToLocalStorage(store.getState()))
//////////////////////////////////// local storage persistent store//////////////////////////////
export default store;

