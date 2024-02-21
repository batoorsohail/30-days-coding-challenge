import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: "1", title: "Whatever", content: "Whatever you wanna write..."},
  {id: "2", title: "Learning Redux", content: "We are going to learn RTK..."}
]

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

  }
})

export default postsSlice.reducer;