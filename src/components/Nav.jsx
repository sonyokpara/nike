import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";

const Nav = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScrollToFixed = () => {
      window.scrollY > 0 ? setIsFixed(true) : setIsFixed(false);
    };

    window.addEventListener("scroll", handleScrollToFixed);

    return () => {
      window.addEventListener("scroll", handleScrollToFixed);
    };
  });

  return (
    <header
      className={`padding-x py-6 z-50 mt-2 w-full ${
        isFixed
          ? "sticky top-0 right-0 left-0 bg-white border-b border-gray-300"
          : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <nav className="flex justify-between items-center max-container">
          <ul className="md:flex flex-1 justify-center items-center gap-8 hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:font-semibold transition-all duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="block md:hidden cursor-pointer" onClick={toggleMenu}>
          {!isMenuOpen ? (
            <FaBars className="w-6 h-6" />
          ) : (
            <FaXmark className="w-6 h-6" />
          )}
          {/* <img src={hamburger} alt="Hamburger" width={25} height={25} /> */}
        </div>

        <nav
          className={`p-10 bg-white z-40 min-h-screen w-full ${
            isMenuOpen ? "left-0 ease-in-out duration-300" : "left-[-100%]"
          } fixed top-[78px]`}
        >
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  onClick={toggleMenu}
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:font-semibold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
