import {legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import basketReducer from "./basket/basketReducer";
import  dataReducer  from "./data/dataReducer";
import productReducer from "./Product/productReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    data: dataReducer,
    product: productReducer,
    basket: basketReducer,
})
const midddleware = [thunk];
const store = createStore(reducers,composeWithDevTools(applyMiddleware(...midddleware)));

export default store;