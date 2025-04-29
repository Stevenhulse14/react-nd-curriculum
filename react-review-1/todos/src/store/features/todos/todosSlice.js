// Step 3 Create my Slice and initial State  ✅

import { createSlice } from "@reduxjs/toolkit";

// create our inital state
const initialState = {
  // piece of data
  // TODO
  items: [
    { id: 1, title: "Clean the dishes ", completed: false },
    { id: 2, title: "Throw out Trash ", completed: false },
    { id: 3, title: " Feed Shadow ! ", completed: true },
    { id: 2, title: "Making the bed ", completed: false },
  ],
  //{     ...... DATA}
};

// create our SLICE

const todosSlice = createSlice({
  name: "todos",
  initialState,
  // actions (functions) that your can perform on that data called your "todos"
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      state.items.push({
        id: Date.now(), // create the item with date
        title: action.payload, // thing we need to do
        completed: false, // completed or not
      });
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
  },
});

// export our actions
export const { addTodo, deleteTodo } = todosSlice.actions;

// export default
export default todosSlice.reducer;
