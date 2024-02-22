import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButtons from "./ReactionButtons"

const PostsExcerpt = ({post}) => {
  return (
    <article className="border border-white rounded-lg py-5 px-8">
      <h3 className="text-2xl text-white font-bold font-serif">{post.title}</h3>
      <p className="text-lg text-white">{post.body.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  )
}

export default PostsExcerpt