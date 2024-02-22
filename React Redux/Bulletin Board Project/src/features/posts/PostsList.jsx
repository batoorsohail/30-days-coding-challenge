import { useSelector } from "react-redux"
import { selectAllPosts } from "./postsSlice"
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButtons from "./ReactionButtons"

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map(post => (
    <article key={post.id} className="border border-white rounded-lg py-5 px-8">
      <h3 className="text-2xl text-white font-bold font-serif">{post.title}</h3>
      <p className="text-lg text-white">{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ))

  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-5xl text-white font-bold">Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList