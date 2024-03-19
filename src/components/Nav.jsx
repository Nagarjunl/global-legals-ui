import { Link } from "react-router-dom";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import GlobalLegals from "../assets/GlobalLegalsLine.png";
import GlobalWhite from "../assets/GlobalLegalsWhite.png";
import PropTypes from "prop-types";

const Nav = ({ page }) => {

  const currentPage = page;

  return (
    <Disclosure as="nav" className="shadow bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {
                    currentPage === "home" ?
                      <Link to="/">
                        <img
                          className="h-12 w-auto"
                          src={GlobalLegals}
                          alt="Global Legals"
                        />
                      </Link>
                      :
                      <Link to="/">
                        <img
                          className="h-12 w-auto"
                          src={GlobalLegals}
                          alt="Global Legals"
                        />
                      </Link>
                  }
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 borderrounded-lg bg-green md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-green">
                    <li>
                      <Link
                        to={"/"}
                        className={`block py-2 px-3 md:p-0 
                        ${currentPage !== "home" ? "text-white-700" : "text-black"}
                        `}
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/searchProfile"}
                        className={`block py-2 px-3 md:p-0 
                        ${currentPage !== "home" ? "text-white-700" : "text-black"}
                        `}
                        aria-current="page"
                      >
                        Profiles
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/faq"}
                        className={`block py-2 px-3 md:p-0 
                        ${currentPage !== "home" ? "text-white-700" : "text-black"}
                        `}
                        aria-current="page"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/auth/login"
                        className={`font-bold hover:bg-green-900 hover:text-white hover:font-semibold focus:ring-4 focus:outline-none  rounded-full text-sm px-6 py-3 ${currentPage === "home" ? "bg-green-900 text-white" : "bg-green-900 text-white"}`}
                      >Business Signup</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              <Disclosure.Button
                as="a"
                href="/"
                className={`block py-2 pl-3 pr-4 text-base font-medium 
                ${currentPage === "home" ? "text-white-700" : "text-white-700"}
                ${currentPage === "home" ? "border-l-4 border-indigo-500 bg-indigo-50" : ""}
                
                `}
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/searchProfile"
                className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 
                ${currentPage === "home" ? "text-black" : "text-white-700"}
                ${currentPage === "profile" ? "border-l-4 border-indigo-500 bg-indigo-50" : ""}
                `}
              >
                Profiles
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/faq"
                className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 
                ${currentPage === "home" ? "text-black" : "text-white-700"}
                ${currentPage === "faq" ? "border-l-4 border-indigo-500 bg-indigo-50" : ""}
                `}
              >
                FAQ
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/auth/login"
                className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 ${currentPage === "home" ? "text-black" : "text-white-700"}`}
              >
                Business Signup
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  );
};

export default Nav;

Nav.propTypes = {
  page: PropTypes.string,
}
