import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <header className="flex items-center justify-between px-[16.5rem] py-11 desktop:px-36 mobile:relative mobile:px-8">
      <Link to="/">
        <img src="./shared/desktop/logo.svg" alt="logo of photosnap" />
      </Link>
      <Navbar isMenuOpen={isMenuOpen} handleClick={handleClick} />
      <button className="bg-black px-10 py-5 text-[1.2rem] font-bold tracking-[0.2rem] text-white transition-all duration-300 hover:bg-opacity-30 hover:text-black mobile:hidden">
        <Link to="/">Get an invite</Link>
      </button>

      <div className="hidden mobile:block" onClick={handleClick}>
        <img
          src="./shared/mobile/menu.svg"
          alt="menu icon"
          className={isMenuOpen ? "hidden" : "block"}
        />
        <img
          src="./shared/mobile/close.svg"
          alt="close icon"
          className={isMenuOpen ? "block" : "hidden"}
        />
      </div>
    </header>
  );
}

export default Header;
