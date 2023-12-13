import logo from "../assets/logo.png";
import { SiApple } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import avatar1 from "../assets/Rectangle3.png";
import avatar2 from "../assets/Rectangle2.png";
import avatar3 from "../assets/Rectangle4.png";
import "../App.css";

const Login = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="hidden lg:block bg-blue-600 py-3">
        <div className="container pl-14 pt-10">
          <div className="mb-10 block">
            <h2 className="text-white pb-2 font-semibold text-3xl">
              Welcome to Globallegals
            </h2>
            <p className="text-white">
              Connecting you with the professionals you need, right in
              <br />
              <span> your neighborhood!</span>
            </p>
          </div>

          <div className="background_image fixed w-[420px] h-[400px]">
            <img
              className="inline-block h-16 w-16 rounded-full absolute right-[50%] top-16"
              src={avatar1}
              alt=""
            />
            <img
              className="inline-block h-12 w-12 rounded-full absolute bottom-[8rem] left-6"
              src={avatar2}
              alt=""
            />
            <img
              className="inline-block h-14 w-14 rounded-full absolute bottom-16 right-[10%]"
              src={avatar3}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center px-4 gap-10 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96 ">
          <div className="flex  items-center mt-5 ">
            <img className="h-10 w-auto" src={logo} alt="Your Company" />
            <h2 className="pl-2 text-2xl font-bold leading-9 tracking-tight text-blue-600">
              Global <br />
              <span>Legals</span>
            </h2>
          </div>

          <div>
            <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Don&apos;t have an accocunt?
              <a
                href="#"
                className="font-semibold text-blue-600 hover:text-blue-500"
              >
                Create an account
              </a>
            </p>
          </div>

          <div className="mt-10">
            <div>
              <form action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@gmail.com"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="***********"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center ">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block text-sm leading-6 text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm leading-6">
                    <a
                      href="#"
                      className="font-semibold text-blue-600 hover:text-blue-500"
                    >
                      Forgot password
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-7">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
              </div>

              <div className="mt-5 grid grid-row-2 gap-4">
                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <FcGoogle size={20} />
                  <span className="text-sm font-semibold leading-6">
                    Sign in with Google
                  </span>
                </a>

                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mb-3.5"
                >
                  <SiApple size={20} />
                  <span className="text-sm font-semibold leading-6 ">
                    Sign in with Apple
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
