import logo from "../../assets/logo.png";
import { SiApple } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-router-dom";
import LeftsideBar from "../../components/Leftside-Bar";

const Login = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className=" max-lg:hidden lg:flex bg-blue-600 xl:flex items-center justify-center ">
        <LeftsideBar />
      </div>

      <div className="flex flex-col justify-center px-4 gap-10 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96 ">
          <div className="flex  items-center mt-5 ">
            <img className="h-10 w-auto" src={logo} alt="Company logo" />
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
                <Link to="/register">Create an account</Link>
              </a>
            </p>
          </div>

          <div className="mt-10">
            <div>
              <form action="#" method="POST">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@gmail.com"
                  autoComplete="email"
                />

                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>

                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="***********"
                  autoComplete="current-password"
                />

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
                      <Link to="/forgetPassword">Forgot password</Link>
                    </a>
                  </div>
                </div>
                <Link to="/dashboard/appointments">
                  <PrimaryButton type="submit" buttonText="Login" />
                </Link>
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
