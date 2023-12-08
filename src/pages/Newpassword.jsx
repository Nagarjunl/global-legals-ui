import logo from "../assets/logo.png";
import Paperplane from "../assets/paper-plane.png";

const Newpassword = () => {
  return (
    <div className="flex min-h-full flex-1">
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt="image"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center px-4 py-12 gap-10 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className=" mx-20  w-full max-w-sm lg:w-96">
          <div className="flex  items-center">
            <img className="h-10 w-auto" src={logo} alt="Your Company" />
            <h2 className="ml-2 text-2xl font-bold leading-9 tracking-tight text-gray-900">
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
              <form action="#" method="POST">
                <div>
                  <label
                    htmlFor="new password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    New Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="text"
                      placeholder="Enter new password"
                      autoComplete="password"
                      required
                      className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
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
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="text"
                      placeholder="Enter new password"
                      autoComplete="password"
                      required
                      className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
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
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newpassword;
