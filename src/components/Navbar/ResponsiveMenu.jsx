import { FaUserCircle, FaTimes } from "react-icons/fa";
import { Navlinks } from "./Navbar";
import PropTypes from "prop-types";

const ResponsiveMenu = ({ showMenu, onClose }) => {
  return (
    <div
      className={`${
        showMenu ? "right-0" : "-right-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-6 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      {/* Icon Close */}
      <div className="flex justify-end">
        <button onClick={onClose} aria-label="Close menu">
          <FaTimes size={24} />
        </button>
      </div>

      {/* Profile Section */}
      <div className="card mt-2">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello PAP</h1>
            <h1 className="text-sm text-slate-500">Owner</h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data) => (
              <li key={data.name}>
                <a href={data.link} className="mb-5 inline-block">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>


      <div className="footer mt-auto pt-6">
        <h1>
          Made with ❤ by <a target="_blank" rel="noopener noreferrer" href="https://wisnuibnu-dev.vercel.app/">WisnuIbnu</a>
        </h1>
      </div>
    </div>
  );
};

ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ResponsiveMenu;
