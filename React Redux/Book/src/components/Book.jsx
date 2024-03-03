const Book = () => {
  const booksData = [
    {
      id: 1,
      name: "Hunger Games",
      author: "King James"
    },
    {
      id: 2,
      name: "Harry Potter",
      author: "JK Rowling"
    },
    {
      id: 3,
      name: "Atomic Habits",
      author: "James Clear"
    },
    {
      id: 4,
      name: "Kite Runner",
      author: "Khaled Hussaini"
    },
  ]
  
  return (
    <section className="flex justify-center flex-wrap gap-40">
      {booksData.map((book) => {
        return (
          <div className="bg-white" key={book.id}>
            <p className="text-2xl">{book.name}</p>
            <p className="text-2xl">{book.author}</p>
            <button type="button">Delete</button>
          </div>
        )
      })}
    </section>
  )
}

export default Book