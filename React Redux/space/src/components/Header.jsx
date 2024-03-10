import Logo from "../assets/planet.png"

const Header = () => {
  return (
    <header className="flex items-center justify-between px-20 py-5 border border-b-black">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-16 h-16"/>
        <h1>Space Project</h1>
      </div>
      <nav>
        <ul className="flex items-center gap-10">
          <li className="text-blue-500 hover:underline active:underline">
            Dragons
          </li>
          <li className="text-blue-500 hover:underline active:underline">
            Missions
          </li>
          <li className="text-blue-500 hover:underline active:underline">
            My profile
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header