import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            const newTodo = {
                id:Date.now(),
                text:action.payload,
                completed:false,
            }
            state.push(newTodo)
        },
        deleteTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
              state.splice(index, 1);
            }
        },
        toggleComplete: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed;
            }
          },
    }
})

export const{addTodo,deleteTodo,toggleComplete}  = todoSlice.actions;
export default todoSlice.reducer;