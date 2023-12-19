import logo from "../assets/logo.png";
import Paperplane from "../assets/paper-plane.png";
import "../App.css";
import PrimaryButton from "../components/PrimaryButton";
// import Input from "../components/Input";
import { Link } from "react-router-dom";
import LeftsideBar from "../components/Leftside-Bar";

const Forgetpassword = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className=" max-lg:hidden lg:flex bg-blue-600 xl:flex items-center justify-center ">
        <LeftsideBar />
      </div>

      <div className="flex flex-col justify-center px-4 py-12 gap-10 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex items-center">
            <img className="h-10 w-auto" src={logo} alt="Company logo" />
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
              <Link to="/newPassword">
                <PrimaryButton type="submit" buttonText="Rest Password" />
              </Link>
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
