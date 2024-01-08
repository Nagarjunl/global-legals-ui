import Globe from "../../assets/image131.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className=" border-gray-200">
        <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Globe} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
              Global <br /> Legals
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-green focus:outline-none focus:ring-2 focus:ring-white dark:text-gray-400"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="/"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 borderrounded-lg bg-green md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-green">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white md:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white  md:p-0"
                >
                  FAQ
                </a>
              </li>
              <li>
                <Link
                  to="/login"
                  className="font-bold text-green-900  bg-white  hover:bg-green-900 hover:text-white hover:font-semibold focus:ring-4 focus:outline-none  rounded-full text-sm px-6 py-3"
                >Business Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
