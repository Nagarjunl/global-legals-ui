import logo from "../assets/logo.png";
import Paperplane from "../assets/paper-plane.png";
import avatar1 from "../assets/Rectangle3.png";
import avatar2 from "../assets/Rectangle2.png";
import avatar3 from "../assets/Rectangle4.png";
import "../App.css";
import PrimaryButton from "../components/PrimaryButton";
// import Input from "../components/Input";

const Newpassword = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="hidden lg:block bg-blue-600 py-3 mb-0">
        <div className="container pl-14 pt-10  ">
          <div className="mb-10 block ">
            <h2 className=" text-white pb-2 font-semibold text-3xl">
              Welcome to Globallegals
            </h2>
            <p className=" text-white">
              Connecting you with the professionals you need, right in
              <br />
              <span> your neighborhood!</span>
            </p>
          </div>

          <div className="background_image fixed w-[420px] h-[400px]">
            <img
              className=" inline-block h-16 w-16 rounded-full absolute right-[50%] top-16 "
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
