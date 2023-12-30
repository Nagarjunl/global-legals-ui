import logo from "../../assets/logo.png";
import PrimaryButton from "../../components/PrimaryButton";
import LeftsideBar from "../../components/Leftside-Bar";
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { getEmail } from '../../reducers/auth/registerSlice'
import { useNavigate } from "react-router-dom";
import { useSendOtpMutation } from "../../services/authAPI";


const Register = () => {

  const dispatch = useDispatch();
  const [sendOtp] = useSendOtpMutation();
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
              <img className="h-10 w-auto" src={logo} alt="Your Company" />
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
                  <PrimaryButton type="submit" buttonText="Send OTP" />
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
