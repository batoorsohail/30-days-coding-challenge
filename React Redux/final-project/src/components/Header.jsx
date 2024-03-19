import { Link } from 'react-router-dom';
import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';

const Header = () => (
  <header className="flex flex-col justify-center gap-3 bg-pink-500 h-[10vh]">
    <ul className="flex justify-between items-center px-2 md:px-10">
      <li className="text-white font-bold">
        <Link to="/">
          <IoIosArrowBack />
        </Link>
      </li>
      <li className="text-white font-bold">
        Crypto
      </li>
      <li className="flex gap-2">
        <p className="text-white font-bold"><FaMicrophone /></p>
        <p className="text-white font-bold"><IoMdSettings /></p>
      </li>
    </ul>
    <input type="text" placeholder="Search coin" className="self-center w-3/4 rounded px-2" />
  </header>
);

export default Header;
