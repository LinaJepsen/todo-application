import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo{
    id: number;
    title: string;
    desc: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[],
    completedTodos: Todo[],
    latestId: number
}

const initialState: TodoState = {
    todos: [{id: 1, title: "äta", desc: "mat", completed: false}],
    completedTodos: [],
    latestId: 1
}

export const todoSlice = createSlice({
    name: 'todo-list',
    initialState,
    reducers: {
        addTodo: (state, action:PayloadAction<{title: string, desc: string, completed: boolean}>) => {
            state.todos.push({
                id: state.latestId += 1,
                title: action.payload.title,
                desc: action.payload.desc,
                completed: false
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        completeTodo: (state, action) => {
            const todoId = action.payload;
            const todoIndex = state.todos.findIndex((todo) => todo.id === todoId);

            if(todoIndex !== -1){
                const completedTodo = state.todos[todoIndex];
                completedTodo.completed = true;
                state.completedTodos.push(completedTodo);
                state.todos.splice(todoIndex, 1);
            }
        },
        editTodo: (state, action:PayloadAction<{id: number, updatedTodo: Partial<Todo>}>) => {
            const {id, updatedTodo} = action.payload;
            const todoIndex = state.todos.findIndex((todo) => todo.id === id);

            if(todoIndex !== -1){
                state.todos[todoIndex] = {
                    ...state.todos[todoIndex],
                    ...updatedTodo
                }
            }
        }
    }
})

export const {addTodo, deleteTodo, completeTodo, editTodo} = todoSlice.actions;
export default todoSlice.reducer;