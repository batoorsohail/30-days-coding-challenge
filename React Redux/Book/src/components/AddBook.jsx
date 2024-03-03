import { useDispatch } from "react-redux"
import { useState } from "react";
import { addBook } from "../redux/books/booksSlice";
import { nanoid } from "nanoid";

const AddBook = () => {
  const dispatch = useDispatch();

  const [ bookName, setBookName ] = useState("");
  const [ authorName, setAuthorName ] = useState("");

  const onBookChanged = e => (setBookName(e.target.value));
  const onAuthorChanged = e => (setAuthorName(e.target.value));

  const onAddBookClick = () => {
    const newBook = {
      item_id: nanoid(),
      title: bookName,
      author: authorName
    }
    dispatch(addBook(newBook));
    setBookName("");
    setAuthorName("");
  }

  return (
    <section className="flex justify-center gap-10 w-full mt-20">
      <input type="text" placeholder="Book Name" onChange={onBookChanged} className="px-[6px] py-[4px]" required />
      <input type="text" placeholder="Author name" onChange={onAuthorChanged} className="px-[6px] py-[4px]" required />
      <button onClick={onAddBookClick} className="bg-blue-600 text-white font-bold px-5 py-[4px]">Add Book</button>
    </section>
  )
}

export default AddBook