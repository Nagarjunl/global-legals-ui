import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { useForm } from "react-hook-form";


const Footer = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };
  return (
    <>
      <div className="bg-white container mx-auto  max-sm:px-6 px-[80px] py-[24px] border-b-[color:var(--Border,#D5E3EF)] border-b border-solid">
        <div className="grid lg:grid-cols-5 gap-[45px]   max-sm:grid-cols-1">
          <div className="lg:col-span-2 md:col-span-3">
            <p className="text-slate-600 text-lg font-bold leading-7 mb-2">
              Exclusive Offers For You
            </p>
            <p className="text-slate-600 text-xs leading-5 whitespace-nowrap mb-2">
              Get the latest updates & offers in your inbox
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="relative w-[310px]">
                  <input
                    type="search"
                    id="search"
                    className="block w-full rounded-full p-4 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter Your Email Address"
                    {...register("footerEmail", { required: "Email is required" })}
                  />
                  <button
                    type="submit"
                    className=" text-white absolute  end-2.5 bottom-2.5 bg-teal-900 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-6 h-9"
                  >
                    send
                  </button>
                </div>
                {errors?.footerEmail && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500 pl-3">
                    {errors?.footerEmail?.message}{" "}
                  </p>
                )}
              </div>
            </form>
          </div>

          <div>
            <p className="text-black text-lg font-bold">Community</p>
            <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
              Customer Success Stories
            </p>
            <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
              Community Hub
            </p>
            <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
              Forum
            </p>
            <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
              Events
            </p>
          </div>

          <div>
            <p className="text-black text-lg font-bold whitespace-nowrap">
              Business
            </p>
            <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
              About us
            </p>
            <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
              Global Certified
            </p>
            <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
              Global Enterprises
            </p>
            <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
              Contact Sales
            </p>
          </div>

          <div>
            <p className="text-black text-lg font-bold whitespace-nowrap">
              About
            </p>
            <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
              Careers
            </p>
            <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
              Press & News
            </p>
            <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
              Partnership
            </p>
            <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
              Privacy Policy
            </p>
            <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
              Terms of Service
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white container mx-auto  max-sm:px-6 px-[80px] py-[24px]">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 justify-between gap-5">
          <p className="text-slate-600 text-xs font-bold leading-5 grow whitespace-nowrap my-auto max-md:max-w-full">
            © 2023 Global Legals
          </p>
          <div className="flex gap-[24px] sm:justify-end">
            <FaInstagram className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
            <FaFacebook className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
            <FaYoutube className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
            <FaTwitter className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
            <FaPinterest className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full  " />
            <FaLinkedinIn className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
