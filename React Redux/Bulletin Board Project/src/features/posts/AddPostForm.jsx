import { useState } from "react";

const AddPostForm = () => {
  const { title, setTitle } = useState("");
  const { content, setContent } = useState("")

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);

  return (
    <div>AddPostForm</div>
  )
}

export default AddPostForm