import logo from "../assets/logo.png";
import Paperplane from "../assets/paper-plane.png";

const Forgetpassword = () => {
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
              Forgot Your Password?
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Enter your registered email address below, and we&apos;ll send you
              a link to reset your password.
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

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Rest Password
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-10">
              <span className="inline-flex items-center rounded-xl bg-blue-50 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-blue-700/10">
                <img src={Paperplane} className="mb-10 mr-2.5 ml-5" />
                We&apos;ve just sent a password reset link to your registered
                email address. Please check your inbox and follow the
                instructions to create a new password. If you don&#39;t receive
                the email within a few minutes, please check your spam folder.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
