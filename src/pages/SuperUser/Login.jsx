import logo from "../../assets/GlobalLegals.svg";
import PrimaryButton from "../../components/PrimaryButton";
import LeftsideBar from "../../components/Leftside-Bar";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import { setSuperUser } from "../../reducers/superUserSlice";
import { addTokens } from "../../reducers/auth/authSlice";
import { currentUser } from "../../reducers/userSlice";
import { useDispatch } from "react-redux";
import { useAdminSignInMutation } from "../../services/authAPI";
import { removeProfileData } from "../../reducers/profileSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signIn, { isLoading }] = useAdminSignInMutation();

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
          if (res.status === 401 && res.message === "User Not Found") {
            setError("email", {
              shouldFocus: true,
              type: "manual",
              message: "Username Not Found",
            });
            return;
          }

          if (res.status === 401 && res.message === "Password Does Not Match") {
            setError("password", {
              shouldFocus: true,
              type: "manual",
              message: "Password Incorrect",
            });
            return;
          }

          const { user, ...rest } = res;
          dispatch(addTokens(rest));
          dispatch(currentUser(user));
          dispatch(removeProfileData());
          navigate("/admin");
        });
    } catch (error) {
      console.log(error);
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
            <Link to="/">
              <img
                className="h-12 w-auto"
                src={logo}
                alt="Global Legals"
              />
            </Link>
          </div>

          <div>
            <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Super User Login
            </h2>
          </div>
          <div className="mt-10">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <>
                  <label
                    htmlFor="email"
                    className={"block text-sm font-medium leading-6 text-gray-900"}
                  >
                    User Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="Enter user name"
                      className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-blue-600 sm:text-sm sm:leading-6"
                      {...register("email", { required: "Email is required" })}
                    />
                  </div>

                  {errors?.email && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors?.email?.message}{" "}
                    </p>
                  )}
                </>
                <>
                  <label
                    htmlFor="text"
                    className={"block text-sm font-medium leading-6 mt-2 text-gray-900"}
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      // defaultValue={"password123"}
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
                <PrimaryButton type="submit" buttonText="Login" disabled={isLoading} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
