import { useSelector } from "react-redux"
import { selectAllPosts } from "./postsSlice"

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const renderedPosts = posts.map(post => (
    <article key={post.id} className="border border-white rounded-lg py-5 px-8">
      <h3 className="text-2xl text-white font-bold font-serif">{post.title}</h3>
      <p className="text-lg text-white">{post.content.substring(0, 100)}</p>
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