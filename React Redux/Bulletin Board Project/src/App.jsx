import PostsList from "./features/posts/PostsList"
import AddPostForm from "./features/posts/AddPostForm"

function App() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 h-screen bg-[#373737]">
      <AddPostForm />
      <PostsList />
    </section>
  )
}

export default App
