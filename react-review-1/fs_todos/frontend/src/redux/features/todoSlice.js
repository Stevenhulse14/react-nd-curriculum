import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
};

// This is where we add our Thunks fetchAll todos 1st- action 2nd- callback function
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (token) => {
    try {
      const res = await axios.get("http://localhost:8000/api/todos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);

// Add an new todo
// Update a todo
// Delete a Todo

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {}, // CRUD activites
  // extraReducers :{ }
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default todosSlice.reducer;
