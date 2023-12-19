import Dropdown from "../components/Dropdown";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  return (
    <>
      <div className="grid grid-cols-1 mt-5 mb-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center p-0 sm:p-16">
        <div className=" p-6  ">
          <div className="text-5xl">
            Get in Touch <br />
            with Global <br /> Legals
          </div>
          <div className="text-xs pt-2">
            Have questions, need assistance, or looking for legal <br />
            guidance? Fill out the form below, and our team will get <br />
            back to you promptly. Your inquiries matter to us!
          </div>
        </div>
        <div className="p-6 bg-[#eff6ff] rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div>
              <label
                htmlFor="input1"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="input1"
                name="input1"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="input2"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="text"
                id="input2"
                name="input2"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            <div>
              <label
                htmlFor="input1"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="input1"
                name="input1"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="input2"
                className="block text-sm font-medium text-gray-700"
              >
                Preferred Contact method
              </label>
              <input
                type="text"
                id="input2"
                name="input2"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
          </div>
          <div className="grid mt-3 w-full">
            <label
              htmlFor="textarea"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Inquiry details
            </label>
            <textarea
              id="textarea"
              name="textarea"
              rows="4"
              className="w-full p-2 border rounded-md"
            ></textarea>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <ReCAPTCHA sitekey="Your client site key" onChange={""} />
            </div>
            <div>
              <button className="bg-indigo-600 text-white px-10 p-2 rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
