import GlobalLegals from "../../assets/GlobalLegals.svg";
// import Paperplane from "../../assets/paper-plane.png";
import "../../App.css";
import PrimaryButton from "../../components/PrimaryButton";
import { useForm } from "react-hook-form"
import LeftsideBar from "../../components/Leftside-Bar";
import { useForgotPasswordMutation } from "../../services/authAPI";
import { Link, useNavigate } from "react-router-dom";
import { getpwResetMail } from '../../reducers/auth/registerSlice'
import { useDispatch } from 'react-redux'

const ForgetPassword = () => {
  const [forgotPassword] = useForgotPasswordMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  const sendOtpMethod = async (data) => {
    let response;
    try {
      response = await forgotPassword(data);
      if (response.data.user === "Not Registered") {
        setError("email", {
          shouldFocus: true,
          type: "manual",
          message: response.data.message,
        });
      } else {
        navigate("/auth/newPassword")
      }
    } catch (error) {
      console.log("error");
    }
  };
  const onSubmit = (data) => {
    dispatch(getpwResetMail(data.email));
    sendOtpMethod(data);
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className=" max-lg:hidden lg:flex bg-blue-600 xl:flex items-center justify-center ">
        <LeftsideBar />
      </div>

      <div className="flex flex-col justify-center px-4 py-12 gap-10 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex items-center">
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
              Forgot Your Password?
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Enter your registered email address below, and we&apos;ll send you
              a link to reset your password.
            </p>
          </div>

          <div className="mt-10 grid gap-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>

              <div className="mt-2">
                <input
                  type="email"
                  placeholder="name@gmail.com"
                  className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-blue-600 sm:text-sm sm:leading-6"
                  {...register("email", { required: "Email Is Required " })}
                />
              </div>
              {errors?.email &&
                <p className="mt-2 text-sm text-red-600 dark:text-red-500"> {errors?.email?.message} </p>
              }
              <PrimaryButton type="submit" buttonText="Reset Password" />
            </form>
          </div>
          <Link to="/auth/login">
            <PrimaryButton type="button" buttonText="Go to Login" />
          </Link>

          {/* <div className="mt-10">
            <span className="inline-flex items-center rounded-xl bg-blue-50 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-blue-700/10">
              <img src={Paperplane} className="pb-10 pr-2.5 pl-5" />
              We&apos;ve just sent a password reset link to your registered
              email address. Please check your inbox and follow the instructions
              to create a new password. If you don&#39;t receive the email
              within a few minutes, please check your spam folder.
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
