import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "../feature/reducers/todoSlice";
 
export const rootReducer = combineReducers({
    todoList : todoSlice
})