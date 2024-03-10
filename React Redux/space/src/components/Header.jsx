import { NavLink } from "react-router-dom"
import Logo from "../assets/planet.png"

const Header = () => {
  return (
    <header className="flex items-center justify-between px-20 py-5 border border-b-black">
      <div className="flex items-center gap-5">
        <img src={Logo} alt="logo" className="w-16 h-16"/>
        <h1 className="text-3xl font-bold">Space Project</h1>
      </div>
      <nav>
        <ul className="flex items-center gap-10">
          <li className="text-lg text-blue-500 active:underline">
            <NavLink to="/">
              Dragons
            </NavLink>
          </li>
          <li className="text-lg text-blue-500 active:underline">
            <NavLink to="/missions">
              Missions
            </NavLink>
          </li>
          <li className="text-lg text-blue-500 active:underline">
            <NavLink to="/myProfile">
              My profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header