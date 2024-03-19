import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useProfileEmailMutation } from "../services/userAPI";
import { useState } from "react";
import PropTypes from 'prop-types';


const Footer = (props) => {
  const { setDialogue } = props;
  const [ack, setAck] = useState();
  const [profileEmail, { isLoading: submitingEmailForm }] = useProfileEmailMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitMailForm = async (data) => {
    try {
      await profileEmail(data).unwrap()
        .then(() => {
          setAck("We will contact you soon!");
        });
    } catch (error) {
      console.log("error");
    }
  }

  const onSubmit = (formData) => {
    const result = { ...formData, superMail: "naga.career.at@gmail.com", mailFrom: "footerForm" }
    submitMailForm(result);
  };
  return (
    <>
      <div className="bg-white max-sm:px-6 px-[120px] py-[45px] border-b-[color:var(--Border,#D5E3EF)] border-b border-solid">
        <div className="mx-auto container">
          <div className="grid lg:grid-cols-4 gap-[45px]  max-sm:grid-cols-1">
            {/* <div className="lg:col-span-2 md:col-span-2">
              <p className="text-slate-600 text-lg font-bold leading-7 mb-2">
                From Founder
              </p>
              <p className="text-slate-600">
                Having a website with only legal professionals makes it one less thing a person must worry about when
                searching for legal help. “Let us do the leg work in gathering the legal professionals you need
                throughout the 50 states. You already have enough on your mind.
              </p>
            </div> */}

            <div className="lg:col-span-2 md:col-span-2">
              <p className="text-black text-lg font-bold leading-7 mb-2">
                Exclusive Offers For You
              </p>
              <p className="text-slate-600 text-xs leading-5 whitespace-nowrap mb-2">
                Get the latest updates & offers in your inbox
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div className="relative sm:w-[400px]  max-sm:w-full">
                    <input
                      type="email"
                      className="block w-full rounded-full p-4  text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Your Email Address"
                      {...register("footerEmail", { required: "Email is required" })}
                    />
                    {
                      !submitingEmailForm ?
                        <button
                          type="submit"
                          disabled={submitingEmailForm}
                          className=" text-white absolute  end-2.5 bottom-[0.5rem] bg-teal-900 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-6 h-9"
                        >
                          send
                        </button>
                        :
                        <button
                          type="button"
                          className=" text-white absolute  end-2.5 bottom-2.5 bg-teal-900 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-6 h-9"
                          disabled="disabled"
                        >
                          <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                          </svg>
                        </button>
                    }
                  </div>
                  {errors?.footerEmail && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500 pl-3">
                      {errors?.footerEmail?.message}{" "}
                    </p>
                  )}
                  <p className=" font-bold text-2xl mb-[-20px] mt-6 text-green-600 dark:text-green-500 pb-3">{ack}</p>
                </div>
              </form>
            </div>

            <div>
              <p className="text-black text-lg font-bold"> Site Info </p>
              <p className="text-zinc-600 font-semibold text-[15px] whitespace-nowrap mt-2">
                <button onClick={() => setDialogue("TERMS")}>
                  Terms and Condition
                </button>
              </p>

              <p className="text-zinc-600 font-semibold text-[15px] whitespace-nowrap mt-2">
                <button onClick={() => setDialogue("PRIVACY")}>
                  Privacy Policy
                </button>
              </p>
            </div>

            <div>
              <p className="text-black text-lg font-bold whitespace-nowrap">
                About
              </p>
              <p className="text-zinc-600 font-semibold text-[15px] whitespace-nowrap mt-2">
                About us
              </p>
              <p className="text-zinc-600 font-semibold text-[15px] whitespace-nowrap mt-2">
                Contact us
              </p>
              <p className="text-zinc-600 text-[13px] font-[450] mt-2">
                1361 W. WADE HAMPTON STE. F PMB 250 GREER, SC 29650
              </p>
            </div>

          </div>

          {/* <div>
            <p className="text-[12px]">
              <a href="#" className="text-blue-700"> Terms & Conditions </a>
              |
              <a href="#" className="text-blue-700"> Private Policies</a>
            </p>
          </div> */}
        </div>
      </div>

      <div className="bg-white container mx-auto  max-sm:px-6 px-[80px] py-[24px]">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 justify-between gap-5">
          <p className="text-slate-600 text-xs font-bold leading-5 grow whitespace-nowrap my-auto max-md:max-w-full">
            © 2023 Global Legals
          </p>
          <div className="flex gap-[24px] sm:justify-end">
            <a href="https://x.com/Globallegals?t=oSwksbs3jJuYReq5Zo8IrA&s=09)" target="_blank" rel="noreferrer">
              <FaTwitter className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
            </a>
            <a href="https://www.instagram.com/globallegals?utm_source=qr&igsh=MTIzN2NnNnh4bWViOQ==" target="_blank" rel="noreferrer">
              <FaInstagram className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
            </a>
            <a href="https://www.facebook.com/GlobalLegals2023?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
              <FaFacebook className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
            </a>
            {/* <FaYoutube className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
            <FaPinterest className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full  " />
            <FaLinkedinIn className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

Footer.propTypes = {
  setDialogue: PropTypes.func,
}
