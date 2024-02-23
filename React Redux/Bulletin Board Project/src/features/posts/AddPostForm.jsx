import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [ title, setTitle ] = useState("");
  const [ content, setContent ] = useState("");
  const [ userId, setUserId ] = useState("");
  const [ addRequestStatus, SetAddRequestStatus ] = useState("idle");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onAuthorChanged = e => setUserId(e.target.value);

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        SetAddRequestStatus("pending");
        dispatch(addNewPost({title, body: content, userId})).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
      } catch (error) {
        console.error("Failed to save the post", error);
      } finally {
        SetAddRequestStatus("idle");
      }
    }
  }

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

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
        <label htmlFor="postAuthor" className="text-lg text-white">Author:</label>
        <select id="post-author" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {userOptions}
        </select>
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
          disabled={!canSave}
        >Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm