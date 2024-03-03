const AddBook = () => {
  return (
    <section className="flex justify-center gap-10 w-full mt-20">
      <input type="text" placeholder="Book Name" className="px-[6px] py-[4px]" required />
      <input type="text" placeholder="Author name" className="px-[6px] py-[4px]" required />
      <button className="bg-blue-600 text-white font-bold px-5 py-[4px]">Add Book</button>
    </section>
  )
}

export default AddBook