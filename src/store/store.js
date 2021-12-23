import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { listarReducer } from "../reducers/listarReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
 
  listar: listarReducer,
  
});

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
    );

    export default store