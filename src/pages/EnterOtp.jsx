import logo from "../assets/logo.png";
import "../App.css";
// import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import Otpinput from "../components/OtpInput";
import { Link } from "react-router-dom";
import LeftsideBar from "../components/Leftside-Bar";

const EnterOtp = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className=" max-lg:hidden lg:flex bg-blue-600 xl:flex items-center justify-center ">
          <LeftsideBar />
        </div>

        <div className="flex flex-col justify-center px-4 gap-10 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96 ">
            <div className="flex  items-center mt-5 ">
              <img className="h-10 w-auto" src={logo} alt="Your Company" />
            </div>

            <div>
              <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500 justify-start">
                Empower Your Professional Journey: Create Your Account Today!
              </p>
            </div>

            <div className="mt-5">
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
                    className="block text-sm pt-1 pb-1 font-medium leading-6 text-gray-900"
                  >
                    Enter OTP
                  </label>
                  <div>
                    <Otpinput />
                  </div>

                  <h2>Enter your received otp</h2>
                  <div className="pt-4">
                    <Link to="/create">
                      <PrimaryButton
                        type="submit"
                        buttonText="Create Account"
                      />
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterOtp;
