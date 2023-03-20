import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import twitsReducer from "./twitsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    twits: twitsReducer,
    
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
