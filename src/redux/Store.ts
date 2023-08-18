import {configureStore} from "@reduxjs/toolkit"
import { nameSlice } from "./Slices/HeaderSlice";
import { todoSlice } from "./Slices/TodoListSlice";

export const store = configureStore({
    reducer: {
         name: nameSlice.reducer,
         todoList: todoSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch