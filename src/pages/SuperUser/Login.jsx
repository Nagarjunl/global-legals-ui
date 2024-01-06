import logo from "../../assets/logo.png";
import PrimaryButton from "../../components/PrimaryButton";
import LeftsideBar from "../../components/Leftside-Bar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const staticEmail = "test@gmail.com";
    const staticPassword = "password123";

    if (data.email === staticEmail && data.password === staticPassword) {
      navigate("/table");
    } else {
      setError("email", {
        type: "manual",
        message: "Invalid email or password",
      });
      setError("password", {
        type: "manual",
        message: "Invalid email or password",
      });
    }
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
              Super User Login
            </h2>
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
                      defaultValue={"test@gmail.com"}
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
                      defaultValue={"password123"}
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
                <PrimaryButton type="submit" buttonText="Login" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
