import logo from "../../assets/logo.png";
import { SiApple } from "react-icons/si";
import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-router-dom";
import LeftsideBar from "../../components/Leftside-Bar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTokens } from "../../reducers/auth/authSlice";
import { currentUser } from "../../reducers/userSlice";
import { useSignInMutation } from "../../services/authAPI";
import { GoogleLogin } from "react-google-login";
import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientId =
  "1088488217067-p3bcsi9hbqg9v5befpfir4ak29dfd28i.apps.googleusercontent.com";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signIn, { isLoading }] = useSignInMutation();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  // var accessToken = gapi.auth.getToken().accessToken;

  const onSuccess = (res) => {
    console.log("Login Succes Current User:", res.profileObj);
    navigate("/dashboard");
  };

  const onFailure = (res) => {
    console.log("Login failed: " + res);
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const signInMethod = async (data) => {
    const { email, password } = data;
    try {
      await signIn({ email, password })
        .unwrap()
        .then((res) => {
          if (res) {
            const { user, ...rest } = res;
            dispatch(addTokens(rest));
            dispatch(currentUser(user));
            navigate("/dashboard");
          }
        });
    } catch (error) {
      console.log(error);
      setError("email", {
        shouldFocus: true,
        type: "manual",
        message: "Username or password is incorrect",
      });
    }
  };

  const onSubmit = (data) => {
    signInMethod(data);
  };

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
              Don&apos;t have an accocunt?&nbsp;
              <Link
                to="/register"
                className="font-semibold text-blue-600 hover:text-blue-500"
              >
                Create an account
              </Link>
            </p>
          </div>

          <div className="mt-10">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium leading-6 ${
                      errors?.email ? "text-red-700" : "text-gray-900"
                    }`}
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-blue-600 sm:text-sm sm:leading-6"
                      {...register("email", { required: "Email is required" })}
                    />
                  </div>

                  {errors?.email && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {" "}
                      {errors?.email?.message}{" "}
                    </p>
                  )}
                </>
                <>
                  <label
                    htmlFor="password"
                    className={`block text-sm font-medium leading-6 ${
                      errors?.password ? "text-red-700" : "text-gray-900"
                    }`}
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      placeholder="***********"
                      className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-blue-600 sm:text-sm sm:leading-6"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                  </div>
                  {errors?.password && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {" "}
                      {errors?.password?.message}{" "}
                    </p>
                  )}
                </>

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
                    <Link
                      to="/forgetPassword"
                      className="font-semibold text-blue-600 hover:text-blue-500"
                    >
                      Forgot password
                    </Link>
                  </div>
                </div>
                <PrimaryButton
                  type="submit"
                  disabled={isLoading}
                  buttonText="Login"
                />
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
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Sign in with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={""}
                  isSignedIn={true}
                />
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
