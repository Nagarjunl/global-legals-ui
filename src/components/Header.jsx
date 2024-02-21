import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import GlobalLegals from "../assets/GlobalLegals.svg";
import UserIcon from "../assets/UserIcon.svg";
import { removeTokens } from "../reducers/auth/authSlice";
import { useDispatch } from "react-redux";
import { removeUser } from "../reducers/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { formData, formDataIdProof, formSubmited, formType, formImgStatus } from "../reducers/formTypeSlice";
import { removeProfileData } from "../reducers/profileSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Example = ({ hideHeaderAvator }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = useSelector((state) => state.user.current_user.id);
  const verify = useSelector((state) => state.user.current_user.verify);

  const logout = () => {
    dispatch(removeTokens());
    dispatch(removeUser());
    dispatch(formData(""));
    dispatch(formDataIdProof(""));
    dispatch(formImgStatus(false));
    dispatch(formSubmited(""));
    dispatch(formType(""));
    dispatch(removeProfileData());
    navigate("/");
  }

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {() => (
        <>
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div> */}
              <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="h-12 w-auto"
                      src={GlobalLegals}
                      alt="Your Company"
                    />
                  </Link>
                </div>
              </div>
              {!hideHeaderAvator ? (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={UserIcon}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {
                          verify ?
                            <>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to={{
                                      pathname: `/professional/profileDetails/${id}`,
                                    }}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                    onClick={() => {
                                      dispatch(formData(""));
                                      dispatch(formDataIdProof(""));
                                      dispatch(formImgStatus(false));
                                    }}
                                  >
                                    Your Profile
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to={{
                                      pathname: '/professional/appointments',
                                    }}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Dashboard
                                  </Link>
                                )}
                              </Menu.Item>
                            </>
                            : ""
                        }

                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={logout}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

        </>
      )}
    </Disclosure>
  );
};

export default Example;

Example.propTypes = {
  hideHeaderAvator: PropTypes.bool,
};
