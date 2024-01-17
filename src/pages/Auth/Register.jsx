import GlobalLegals from "../../assets/GlobalLegals.svg";
import PrimaryButton from "../../components/PrimaryButton";
import LeftsideBar from "../../components/Leftside-Bar";
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { getEmail } from '../../reducers/auth/registerSlice'
import { Link, useNavigate } from "react-router-dom";
import { useSendOtpMutation } from "../../services/authAPI";

const Register = () => {

  const dispatch = useDispatch();
  const [sendOtp, { isLoading }] = useSendOtpMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const sendOtpMethod = async (data) => {
    const { email } = data;
    let response;

    try {
      response = await sendOtp(email);
      if (response.data.user === true) {
        setError("email", {
          shouldFocus: true,
          type: "manual",
          message: response.data.message,
        });
      } else {
        navigate("/enterOTP")
      }
    } catch (error) {
      console.log("error");
    }
  };

  const onSubmit = (data) => {
    dispatch(getEmail(data.email));
    sendOtpMethod(data);
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className=" max-lg:hidden lg:flex bg-blue-600 xl:flex items-center justify-center ">
          <LeftsideBar />
        </div>

        <div className="flex flex-col justify-center px-4 gap-10 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96 ">
            <div className="flex  items-center mt-10 ">
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
                Create your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Empower Your Professional Journey: Create Your Account Today!
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium leading-6 ${errors?.email ? 'text-red-700' : 'text-gray-900'}`}
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

                  {
                    !isLoading ?
                      <PrimaryButton type="submit" disabled={isLoading} buttonText="Send OTP" />
                      :
                      <div>
                        <button
                          className="flex w-full justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          disabled="disabled"
                        >
                          <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                          </svg>
                        </button>
                      </div>
                  }
                  <Link to="/login">
                    <PrimaryButton type="button" buttonText="Go to Login" />
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
