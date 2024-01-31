import { useEffect } from "react";
import GlobalLegals from "../../assets/GlobalLegals.svg";
import Paperplane from "../../assets/paper-plane.png";
import "../../App.css";
import PrimaryButton from "../../components/PrimaryButton";
import LeftsideBar from "../../components/Leftside-Bar";
import { useSelector } from 'react-redux'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { useSetPasswordMutation } from "../../services/authAPI";
import { useDispatch } from "react-redux";
import { clearEmail } from "../../reducers/auth/registerSlice";
import { addTokens } from "../../reducers/auth/authSlice";
import { currentUser } from "../../reducers/userSlice";


const REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const CreatePassword = () => {
  const [setPassword, { isLoading }] = useSetPasswordMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registeredMail = useSelector((state) => state.registeredMail.email)
  const otp = useSelector((state) => state.registeredMail.otp)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const setPasswordMethod = async (data) => {
    data.email = registeredMail;
    const { email, password } = data;
    try {
      await setPassword({ email, password })
        .unwrap()
        .then((res) => {
          if (res) {
            const { user, ...rest } = res;
            dispatch(addTokens(rest));
            dispatch(currentUser(user));
            dispatch(clearEmail());
            navigate("/professional");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = (data) => {
    dispatch(clearEmail());
    setPasswordMethod(data);
  }

  useEffect(() => {
    if (!otp) {
      navigate("/enterOtp");
    }
    if (!registeredMail) {
      navigate("/");
    }
  }, [otp, registeredMail]);

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
            </Link>          </div>

          <div>
            <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Empower Your Professional Journey: Create Your Account Today!
            </p>
          </div>

          <div className="mt-3 grid gap-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <input
                type="email"
                value={registeredMail}
                className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-blue-600 sm:text-sm sm:leading-6"
                disabled

              />

              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Set your Password
              </label>
              <input
                type=""
                placeholder="Enter New Password"
                className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-blue-600 sm:text-sm sm:leading-6"
                {...register("password", {
                  required: "Password Is Required",
                  pattern: {
                    value: REGEX,
                    message: "Password should be more than 8 characters and include at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character!"
                  }
                })}
              />
              {errors?.password &&
                <p className="mt-2 text-sm text-red-600 dark:text-red-500"> {errors?.password?.message} </p>
              }
              <PrimaryButton type="submit" disabled={isLoading} buttonText="Login" />

              <Link to="/auth/login">
                <PrimaryButton type="button" disabled={isLoading} buttonText="Go to Login" />
              </Link>

            </form>
          </div>

          {/* <div className="mt-6">
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

export default CreatePassword;
