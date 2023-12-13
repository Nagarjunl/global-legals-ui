import logo from "../assets/logo.png";
import Paperplane from "../assets/paper-plane.png";
import avatar1 from "../assets/Rectangle3.png";
import avatar2 from "../assets/Rectangle2.png";
import avatar3 from "../assets/Rectangle4.png";
import "../App.css";

const Forgetpassword = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="hidden lg:block bg-blue-600 py-3 mb-0">
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

      <div className="flex flex-col justify-center px-4 py-12 gap-10 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex items-center">
            <img className="h-10 w-auto" src={logo} alt="Your Company" />
            <h2 className="ml-2 text-2xl font-bold leading-9 tracking-tight text-blue-600">
              Global <br />
              Legals
            </h2>
          </div>

          <div>
            <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Forgot Your Password?
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Enter your registered email address below, and we&apos;ll send you
              a link to reset your password.
            </p>
          </div>

          <div className="mt-10 grid gap-3">
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

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>

          <div className="mt-10">
            <span className="inline-flex items-center rounded-xl bg-blue-50 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-blue-700/10">
              <img src={Paperplane} className="pb-10 pr-2.5 pl-5" />
              We&apos;ve just sent a password reset link to your registered
              email address. Please check your inbox and follow the instructions
              to create a new password. If you don&#39;t receive the email
              within a few minutes, please check your spam folder.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
