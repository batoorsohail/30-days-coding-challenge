import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {id: "1", title: "Whatever", content: "Whatever you wanna write..."},
  {id: "2", title: "Learning Redux", content: "We are going to learn RTK..."}
]

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId
          }
        }
      }
    }
  }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;