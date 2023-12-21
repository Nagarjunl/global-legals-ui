import FirstForm from "../../components/FirstForm";
import Dropdown from "../../components/Dropdown";
import GoogleImage from "../../assets/Google-image.png";
import ReCAPTCHA from "react-google-recaptcha";

const PersonalInformation = () => {
  const handleChange = () => {
    console.log("ReCaptcha");
  };
  return (
    <>
      <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-12">
        <div>
          <h3 className="font-semibold leading-6 text-2xl mt-11 text-gray-900">
            Select your profession
          </h3>
          <div className="flex justify-between flex-row flex-wrap w-full sm:mt-2">
            <p className="mt-3">
              Choose your profession from the options below to tailor the form
              to your specific needs. Let&apos;s ensure we <br />
              provide you with the best experience on Globallegals
            </p>
            <div>
              <select
                id="location"
                name="location"
                className="block w-full mt-4 rounded-md border-0 py-3 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Select from dropdown
                </option>

                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>{" "}
          </div>
        </div>
        <div className="mt-11">
          <FirstForm />
        </div>
        <div>
          <Dropdown />
        </div>
        <div>
          <h3 className=" font-semibold leading-6 text-2xl mt-11 text-gray-900">
            Professional Enhancement
          </h3>

          <div className="flex justify-between flex-wrap flex-row w-full mt-2">
            <p className="mt-3">
              Boost Your Profile! Connect Google Reviews and Testimonials to
              showcase your expertise. Click below to
              <br /> elevate your professional reputation on Global legals
            </p>
            <button
              type="button"
              className="rounded-md mt-2 bg-white px-20 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid border-black"
            >
              <div className="flex">
                <img src={GoogleImage} alt="Not found" />
                <p className=" ml-3">Connect with Google</p>
              </div>
            </button>
          </div>
        </div>
        <div className="flex-1 border-t border-gray-300 mt-3"></div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <h5 className="mt-2">Linkedin profile</h5>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Linkedin profile"
                autoComplete="given-name"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <h5 className="mt-2">Twitter Profile</h5>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                placeholder="Twitter Profile"
                className="block w-full  px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="myCheckbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <label className="ml-2 mt-4">
            By proceeding, you confirm that you&apos;ve read, comprehended, and
            consent to abide by our{" "}
            <span className="text-blue-700 underline">
              Terms and Conditions.
            </span>{" "}
            Your commitment to reviewing our terms ensures a comprehensive
            understanding of the guidelines governing your use of Global Legals
          </label>
        </div>
        <div className="flex-1 border-t border-gray-300 mt-7"></div>
        <div className="flex justify-between flex-wrap mt-3">
          <div>
            <ReCAPTCHA sitekey="Your client site key" onChange={handleChange} />
          </div>
          <div>
            <button className="rounded-md mt-2 text-white bg-blue-800 border-blue-800 px-20 py-2 text-sm font-semibol shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid ">
              Save & Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
