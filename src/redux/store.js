import { createStore } from "redux";
import todoReducer from './Todo/reducerTodo'
const store =createStore(todoReducer)
export default store;