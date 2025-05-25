import { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import PropTypes from 'prop-types';

export const Navlinks = [
  { id: 1, name: "BERANDA", link: "/" },
  { id: 2, name: "MODEL KENDARAAN", link: "/models" },
  { id: 3, name: "TIM", link: "/teams" },
  { id: 4, name: "TESTIMONIAL", link: "/testimonials" },  
  { id: 5, name: "TENTANG KAMI", link: "/about-us" },
  { id: 6, name: "LOGIN", link: "/login" },

];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed z-10 shadow-md w-full text-dark dark:text-white duration-300 top-0 bg-gray-200 bg-opacity-90 dark:bg-dark dark:bg-opacity-90">
      <div className="container py-5 md:py-3">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold font-serif">SewaCar.id</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-sm font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
              {theme === "dark" ? (
                <BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
              ) : (
                <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />
              )}
            </ul>
          </nav>

          {/* Mobile View */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
            ) : (
              <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />
            )}
            {showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
            )}
          </div>
        </div>
      </div>

      {/* Responsive Menu with close function */}
      <ResponsiveMenu showMenu={showMenu} onClose={() => setShowMenu(false)} />
    </div>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Navbar;
