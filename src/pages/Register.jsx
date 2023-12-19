import logo from "../assets/logo.png";
import avatar1 from "../assets/Rectangle3.png";
import avatar2 from "../assets/Rectangle2.png";
import avatar3 from "../assets/Rectangle4.png";
import "../App.css";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
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
            <div className="flex  items-center mt-10 ">
              <img className="h-10 w-auto" src={logo} alt="Your Company" />
              <h2 className="pl-2 text-2xl font-bold leading-9 tracking-tight text-blue-600">
                Global <br />
                <span>Legals</span>
              </h2>
            </div>

            <div>
              <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Empower Your Professional Journey: Create Your Account Today!
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
                  <Link to="/enterOTP">
                    <PrimaryButton type="submit" buttonText="Send OTP" />
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
