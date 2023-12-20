import logo from "../assets/logo.png";
import Paperplane from "../assets/paper-plane.png";
import "../App.css";
import PrimaryButton from "../components/PrimaryButton";
import Input from "../components/Input";
import LeftsideBar from "../components/Leftside-Bar";

const Newpassword = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className=" max-lg:hidden lg:flex bg-blue-600 xl:flex items-center justify-center ">
        <LeftsideBar />
      </div>
      <div className="flex flex-col justify-center px-4 gap-10 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex items-center">
            <img className="h-10 w-auto" src={logo} alt="Company logo" />
          </div>

          <div>
            <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create new password
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              We value your security. To enhance your account protection, please
              create a new password by following the guidelines below
            </p>
          </div>

          <div className="mt-10">
            <div>
              <form action="#" method="POST" className="grid gap-3">
                <div>
                  <label
                    htmlFor="new password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    New Password
                  </label>
                  <div>
                    <Input
                      id="password"
                      name="password"
                      type="text"
                      placeholder="Enter new password"
                      autoComplete="password"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="Confirm Password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <div>
                    <Input
                      id="password"
                      name="password"
                      type="text"
                      placeholder="Enter new password"
                      autoComplete="password"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <span className="inline-flex items-center rounded-xl bg-blue-50 px-5 py-1  text-xs font-medium text-black ring-1 ring-inset ring-blue-700/10">
                    <img src={Paperplane} className=" mt-3 mb-10 mr-2.5" />
                    Your password must: Be at least 8 characters long. Include a
                    mix of uppercase and lowercase letters. Contain at least one
                    number and one special character.
                  </span>
                </div>
                <PrimaryButton type="submit" buttonText="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newpassword;
