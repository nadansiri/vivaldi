//import creatStore
import {createStore, compose, applyMiddleware} from "redux"
//import thunk
import thunk from "redux-thunk"

//import rootReducer
import rootReducer from "../reducers"


function saveToLocalStorage(state) {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
}

function loadFromLocalStorage() {
const serializedState = localStorage.getItem('state');
if (serializedState === null) return undefined;
   return JSON.parse(serializedState);
}


//create composeEnhancer
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const presistedState = loadFromLocalStorage();


//store

const store = createStore(
    rootReducer,presistedState,
    composeEnhancer(applyMiddleware(thunk)) 
)

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store 