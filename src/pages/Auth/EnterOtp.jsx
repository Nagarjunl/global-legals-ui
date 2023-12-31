import { useEffect } from "react";
import logo from "../../assets/logo.png";
import "../../App.css";
import PrimaryButton from "../../components/PrimaryButton";
import { useSelector } from 'react-redux'
import LeftsideBar from "../../components/Leftside-Bar";
import { useNavigate } from "react-router-dom";
import { useVerifyOtpMutation } from "../../services/authAPI";
import { useForm, Controller } from "react-hook-form"
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { getOtp } from '../../reducers/auth/registerSlice'

const EnterOtp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registeredMail = useSelector((state) => state.registeredMail.email)
  const otpFromStore = useSelector((state) => state.registeredMail.otp)
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm();

  const validateOtpMethod = async (data) => {
    data.email = registeredMail;
    const { email, otp } = data;
    try {
      await verifyOtp({ email, otp })
        .unwrap()
        .then((res) => {
          if (res.status === true)
            navigate("/createPassword");
        });
    } catch (error) {
      setError("otp", {
        shouldFocus: true,
        message: "Enter Valid OTP",
        type: "custom",
      });
    }
  }

  const onSubmit = (data) => {
    dispatch(getOtp(true));
    validateOtpMethod(data);
  }

  useEffect(() => {
    if (!registeredMail) {
      navigate("/");
    }
    if (otpFromStore) {
      navigate("/createPassword");
    }
  }, [registeredMail, navigate, otpFromStore]);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className=" max-lg:hidden lg:flex bg-blue-600 xl:flex items-center justify-center ">
          <LeftsideBar />
        </div>

        <div className="flex flex-col justify-center px-4 gap-10 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96 ">
            <div className="flex  items-center mt-5 ">
              <img className="h-10 w-auto" src={logo} alt="Your Company" />
            </div>

            <div>
              <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500 justify-start">
                Empower Your Professional Journey: Create Your Account Today!
              </p>
            </div>

            <div className="mt-5">
              <div>
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
                    htmlFor="password"
                    className="block text-sm pt-1 pb-1 font-medium leading-6 text-gray-900"
                  >
                    Enter OTP
                  </label>
                  <div className=" max-w-md">
                    <Controller
                      name="otp"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Please Enter OTP",
                        minLength: {
                          value: 6,
                          message: "Enter Valid OTP",
                        },
                      }}
                      render={({ field }) => (
                        <>
                          <OtpInput
                            value={field.value}
                            onChange={(otp) => field.onChange(otp)}
                            numInputs={6}
                            renderSeparator={<span className="mr-1"></span>}
                            renderInput={(props) => (
                              <input
                                {...props}
                                type="number"
                                className=" h-12 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500 mb-2"
                              />
                            )}
                            inputStyle={{
                              border: "1px solid gray",
                              borderRadius: "8px",
                              width: "55px",
                              height: "45px",
                              fontSize: "18px",
                              color: "black",
                              fontWeight: "400",
                              caretColor: "gray",
                              transition: "border-color 0.3s",
                            }}

                            focusStyle={{}}
                          />
                        </>
                      )}
                    />
                    {errors?.otp &&
                      <p className=" text-sm text-red-600 dark:text-red-500"> {errors?.otp?.message}</p>
                    }
                  </div>

                  <div className="pt-4">
                    <div>
                      <PrimaryButton type="submit" disabled={isLoading} buttonText="Create Account" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default EnterOtp;
