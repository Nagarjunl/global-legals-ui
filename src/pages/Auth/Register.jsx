import logo from "../../assets/logo.png";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-router-dom";
import LeftsideBar from "../../components/Leftside-Bar";

const Register = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className=" max-lg:hidden lg:flex bg-blue-600 xl:flex items-center justify-center ">
          <LeftsideBar />
        </div>

        <div className="flex flex-col justify-center px-4 gap-10 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96 ">
            <div className="flex  items-center mt-10 ">
              <img className="h-10 w-auto" src={logo} alt="Your Company" />
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
