import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [ title, setTitle ] = useState("");
  const [ content, setContent ] = useState("")

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      )
      setTitle("");
      setContent("");
    }
  }

  return (
    <section>
      <h2 className="text-5xl text-white font-bold">Add a new post</h2>
      <form className="flex flex-col">
        <label htmlFor="postTitle" className="text-lg text-white">Post Title:</label>
        <input 
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent" className="text-lg text-white">Content:</label>
        <input 
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button 
          type="button"
          onClick={onSavePostClicked}
          className="border border-black text-lg text-black bg-white mt-2"
        >Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm