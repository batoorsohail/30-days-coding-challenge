import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {id: "1", title: "Whatever", content: "Whatever you wanna write...", date: sub(new Date(), {minutes: 10}).toISOString() },
  {id: "2", title: "Learning Redux", content: "We are going to learn RTK...", date: sub(new Date(), {minutes: 5}).toISOString()}
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
            date: new Date().toISOString(),
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