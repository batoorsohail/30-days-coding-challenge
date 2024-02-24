import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { useParams } from "react-router-dom";

const SinglePostPage = () => {
  const { postId } = useParams()

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return(
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo date={post.date} />
      </p>
      <ReactionButtons post={post} />
    </section>
  )
}

export default SinglePostPage