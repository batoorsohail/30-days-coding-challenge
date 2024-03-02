import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-black flex items-center justify-between py-2 px-20">
      <h1 className="text-white text-3xl">Book Store</h1>
      <nav>
        <ul className="flex items-center gap-10">
          <li>
            <Link to="/" className="text-white">Books</Link>
          </li>
          <li>
            <Link to="/categories" className="text-white">Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header