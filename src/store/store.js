import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { todosReducer, fromReducer } from './reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  todos: todosReducer,
  forms: fromReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))