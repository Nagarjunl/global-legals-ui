import GoogleImage from "../../assets/Google-image.png";
import ReCAPTCHA from "react-google-recaptcha";

const LawyerEnterDetails = () => {
  const handleChange = () => {
    console.log("ReCaptcha");
  };
  return (
    <>
      <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-12">
        <div>
          <h3 className="font-medium leading-[34.32px] text-[24px] mt-10">
            Select your profession
          </h3>
          <div className="flex justify-between flex-row flex-wrap w-full">
            <p className="mt-2 text-[14px]">
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
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4">
            <h3 className="lg:col-span-3 font-medium leading-[34.32px] text-[24px]">
              Personal Information
            </h3>
            <div>
              <div className="">
                <h5 className="font-normal leading-[17.16px] text-[12px]">Enter your full name</h5>
                <div className="mt-2">
                  <input
                    className="block w-full p-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              <div className="mt-2">
                <h5 className="font-normal leading-[17.16px] text-[12px]">Contact number</h5>
                <div className="mt-2">
                  <input
                    className="block w-full p-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your Contact number"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <h5 className="font-normal leading-[17.16px] text-[12px]">Enter Email Address</h5>
                <div className="mt-2">
                  <input
                    className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Email Address"
                  />
                </div>
              </div>
              <div className="mt-2">
                <h5 className="font-normal leading-[17.16px] text-[12px]">Location / Address</h5>
                <div className="mt-2">
                  <input
                    className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your location "
                  />
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-dashed border-gray-900/25">
              <div className="flex justify-center">
                <div className="text-center mb-2 ">
                  <div className="mt-4 flex">
                    <p className="mb-2 text-[16px] font-normal w-[204px]">
                      Upload your <br></br>current photo
                    </p>
                  </div>
                  <button
                    type="button"
                    className="rounded-md bg-white px-3.5  py-2.5 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid border-blue-500"
                  >
                    Browse & upload
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">Write a professional Bio</h5>
            <div className="mt-2">
              <textarea
                rows={4}
                name="comment"
                id="comment"
                className="block w-full  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                placeholder="Write a professional Bio"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
            <h3 className="font-medium leading-[34.32px] text-[24px] mt-2 text-gray-900 sm:col-span-6">
              Professional details
            </h3>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">Name of practicing law firm</h5>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Enter Name"
                  className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">Legal Specialization</h5>

              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                >
                  <option value="" disabled selected hidden>
                    Select from dropdown
                  </option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3 ">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">Years of Experience</h5>

              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                >
                  <option value="" disabled selected hidden>
                    Select from dropdown
                  </option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">Bar Association License Number</h5>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="License Number"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">Areas Served till now</h5>

              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                >
                  <option value="" disabled selected hidden>
                    Select from dropdown
                  </option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">Law Field Specialized in</h5>

              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                >
                  <option value="" disabled selected hidden>
                    Select from dropdown
                  </option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">Languages Spoken</h5>

              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                >
                  <option value="" disabled selected hidden>
                    Select from dropdown
                  </option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
          </div>{" "}
        </div>
        <div>
          <h3 className="font-medium leading-[34.32px] text-[24px] mt-10">
            Professional Enhancement
          </h3>

          <div className="flex justify-between  flex-wrap flex-row w-full mt-2">
            <p className="mt-2 text-[14px]">
              Boost Your Profile! Connect Google Reviews and Testimonials to
              showcase your expertise. Click below to
              <br /> elevate your professional reputation on Global legals
            </p>
            <button className="mt-2 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 w-72">
              <div className="flex justify-center">
                <img
                  src={GoogleImage}
                  alt="Google Logo"
                  className="w-[20px] h-[20px]"
                />
                <p className="ml-3">Connect with Google</p>
              </div>
            </button>
          </div>

        </div>
        <div className="flex-1 border-t border-gray-300 mt-3"></div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">Linkedin profile</h5>
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
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">Twitter Profile</h5>
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

        <div className="flex mt-2">
          <input
            type="checkbox"
            id="myCheckbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <label className="ml-2 text-[12px]">
            By proceeding, you confirm that you&apos;ve read, comprehended, and
            consent to abide by our
            <span className="text-blue-700 underline text-[12px]">
              Terms and Conditions.
            </span>
            Your commitment to reviewing our terms ensures a comprehensive
            understanding of the guidelines governing your use of Global Legals
          </label>
        </div>
        <div className="flex-1 border-t border-gray-300 mt-7"></div>
        <div className="flex justify-between flex-wrap mt-10">
          <div>
            <ReCAPTCHA
              sitekey="6LfAUjgpAAAAABQcBX1BtSezxeoNoBDoZk9XPS7T"
              onChange={handleChange}
            />
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

export default LawyerEnterDetails;
