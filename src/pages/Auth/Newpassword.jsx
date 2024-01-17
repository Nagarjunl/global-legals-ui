import GlobalLegals from "../../assets/GlobalLegals.svg";
import Paperplane from "../../assets/paper-plane.png";
import PrimaryButton from "../../components/PrimaryButton";
import "../../App.css";
import { useForm } from "react-hook-form"
import LeftsideBar from "../../components/Leftside-Bar";
import { useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { useChangePasswordMutation } from "../../services/authAPI";
import { useDispatch } from "react-redux";
import { clearEmail } from "../../reducers/auth/registerSlice";

const REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const NewPassword = () => {

  const pwResetMail = useSelector((state) => state.registeredMail.pwResetMail)
  const [changePassword] = useChangePasswordMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const setPasswordMethod = async (data) => {
    data.email = pwResetMail;
    const { email, password } = data;
    try {
      await changePassword({ email, password })
        .unwrap()
        .then((res) => {
          if (res) {
            dispatch(clearEmail());
            navigate("/");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = (data) => {
    setPasswordMethod(data);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className=" max-lg:hidden lg:flex bg-blue-600 xl:flex items-center justify-center ">
        <LeftsideBar />
      </div>
      <div className="flex flex-col justify-center px-4 gap-10 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
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
            <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create new password
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              We value your security. To enhance your account protection, please
              create a new password by following the guidelines below
            </p>
          </div>

          <div className="mt-10">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor="new password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    New Password
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter new password"
                      className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-blue-600 sm:text-sm sm:leading-6"
                      {...register('password', {
                        required: "Password is Required",
                        pattern: {
                          value: REGEX,
                          message: "Password should be more than 8 characters and include at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character!"
                        }
                      })
                      }
                    />
                  </div>
                  {errors?.password &&
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500"> {errors?.password?.message} </p>
                  }
                </div>

                <div>
                  <label
                    htmlFor="Confirm Password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Confirm Password"
                      className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-blue-600 sm:text-sm sm:leading-6"
                      {...register('password1', {
                        required: "Password is Required",
                        validate: (value) => {
                          return value === watch('password') || 'Password does not match'
                        }
                      })
                      }
                    />
                  </div>
                  {errors?.password1 &&
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500"> {errors?.password1?.message} </p>
                  }
                </div>

                <div className="mt-3">
                  <span className="inline-flex items-center rounded-xl bg-blue-50 px-5 py-1  text-xs font-medium text-black ring-1 ring-inset ring-blue-700/10">
                    <img src={Paperplane} className=" mt-3 mb-10 mr-2.5" />
                    Your password must: Be at least 8 characters long. Include a
                    mix of uppercase and lowercase letters. Contain at least one
                    number and one special character.
                  </span>
                </div>

                <PrimaryButton type="submit" buttonText="Submit" />

                <Link to="/login" className="mb-3">
                  <PrimaryButton type="button" buttonText="Go to Login" />
                </Link>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
