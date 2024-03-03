import { useSelector } from "react-redux"

const Book = () => {
  const books = useSelector((state) => state.books.booksData || [])  
  
  return (
    <section className="flex justify-center flex-wrap gap-40 pt-20">
      {books.map((book) => {
        return (
          <div className="bg-white py-5 px-10 rounded-md" key={book.item_id}>
            <p className="text-2xl">{book.title}</p>
            <p className="text-2xl">{book.author}</p>
            <button type="button" className="bg-red-600 text-white font-bold py-2 px-5 rounded-md">Delete</button>
          </div>
        )
      })}
    </section>
  )
}

export default Book