import GlobalLegals from "../../assets/GlobalLegals.svg";
import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-router-dom";
import LeftsideBar from "../../components/Leftside-Bar";
import Paperplane from "../../assets/paper-plane.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTokens } from "../../reducers/auth/authSlice";
import { currentUser } from "../../reducers/userSlice";
import { useProfessionSignInMutation } from "../../services/authAPI";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signIn, { isLoading }] = useProfessionSignInMutation();

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
            navigate("/professional");
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
          <div className="flex  items-center mt-5 mb-10">
            <Link to="/">
              <img
                className="h-12 w-auto"
                src={GlobalLegals}
                alt="Global Legals"
              />
            </Link>

          </div>

          <div>
            <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Don&apos;t have an accocunt?&nbsp;
              <Link
                to="/auth/register"
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
                    className={`block text-sm font-medium leading-6 ${errors?.email ? "text-red-700" : "text-gray-900"
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
                    className={`block text-sm font-medium leading-6 ${errors?.password ? "text-red-700" : "text-gray-900"
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
                      {errors?.password?.message}{" "}
                    </p>
                  )}
                </>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center ">
                    {/* <input
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
                    </label> */}
                  </div>

                  <div className="text-sm leading-6">
                    <Link
                      to="/auth/forgetPassword"
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

              <div className="mt-3 mb-10">
                <span className="inline-flex items-start rounded-xl bg-blue-50 px-5 py-1  text-xs font-medium text-black ring-1 ring-inset ring-blue-700/10 text-justify">
                  <img src={Paperplane} className=" mt-3 mb-10 mr-2.5" />
                  This site was built to give everyone a chance to compete with the bigger firms/legal services that are
                  well-established. It will also allow the smaller/newer legal professionals an opportunity to see how it feels
                  to not be taken advantage of due to them not spending as much on advertising as the larger firms/legal
                  services. Global Legals is here to connect you with other legal professionals throughout all 50 states.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
