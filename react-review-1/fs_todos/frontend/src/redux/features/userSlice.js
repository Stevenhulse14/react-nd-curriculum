import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, logout } = userSlice.actions;

export default userSlice.reducer;
