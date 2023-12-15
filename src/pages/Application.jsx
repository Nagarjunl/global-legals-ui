import global from "../assets/Frame.png";
import profile from "../assets/Rectangle 2.png";
import Input2 from "../components/input2";
import Options from "../components/options";
import GoogleImage from "../assets/Google image.png";
import Stepper from "../components/stepper";
export default function Application() {
  return (
    <>
      <div className="flex justify-between flex-row .w-full mt-3 px-10">
        <img src={global} alt="Not found" />
        <img src={profile} alt="Not found" />
      </div>
      <div className="flex-1 border-t border-gray-300 mt-3"></div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-12 flex justify-center mt-11">
        <div className="  w-auto bg-blue-50 rounded-3xl">
          <Stepper />
        </div>
      </div>

      <div className="mx-auto max-w-7xl sm:px-6 lg:px-12">
        <div>
          <h3 className=" font-semibold leading-6 text-2xl mt-11 text-gray-900">
            Select your profession
          </h3>

          <div className="flex justify-between flex-row flex-wrap w-full sm: mt-2">
            <p className="mt-3">
              Choose your profession from the options below to tailor the form
              to your specific needs. Let&apos;s ensure we <br />
              provide you with the best experience on Globallegals
            </p>
            <Options />
          </div>
        </div>
        <div>
          <h3 className=" font-semibold leading-6 text-2xl mt-11 text-gray-900">
            Personal Information
          </h3>
          <Input2 />
        </div>
        <div>
          <h3 className=" font-semibold leading-6 text-2xl mt-11 text-gray-900">
            Professional Credentials
          </h3>
        </div>
        <div className="flex flex-wrap justify-between mt-3">
          <div>
            <h5 className="mt-2">Security License Number</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter the number"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">License Expiry Date</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter Expiry Date"
              />
            </div>
          </div>
        </div>
        <h5 className="mt-2">Years of Experience in Security</h5>
        <div className="mt-2">
          <input
            className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Years of Experience in Security"
          />
        </div>
        <h3 className=" font-semibold leading-6 text-2xl mt-12 text-gray-900">
          Military Background - if applicable
        </h3>
        <div className="flex justify-between  flex-wrap mt-2">
          <div>
            <h5 className="mt-2">Branch of Service</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Branch of Service"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Rank at Discharge</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Rank at Discharge"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-wrap mt-2">
          <div>
            <h5 className="mt-2">Military Occupational Speciality ( MOS):</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="MOS"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Years of military Service:</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Years of military Service"
              />
            </div>
          </div>
        </div>
        <h3 className=" font-semibold leading-6 text-2xl mt-12 text-gray-900">
          Business Information ( if - applicable)
        </h3>
        <div className="flex justify-between  flex-wrap mt-2">
          <div>
            <h5 className="mt-2">Business Name</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Business Name"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Business Address</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Business Address"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-wrap mt-2">
          <div>
            <h5 className="mt-2">Business Email</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Business Email"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Business Phone number</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Business Phone number"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className=" font-semibold leading-6 text-2xl mt-11 text-gray-900">
            Service Details
          </h3>
        </div>
        <div className="flex flex-wrap justify-between mt-3">
          <div>
            <h5 className="mt-2">Type of Security Services Offered</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Type of Security Services Offered"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Coverage Areas</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Coverage Areas"
              />
            </div>
          </div>
        </div>
        <h5 className="mt-2">Fee Structure</h5>
        <div className="mt-2">
          <input
            className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Fee Structure"
          />
        </div>
        <h3 className=" font-semibold leading-6 text-2xl mt-12 text-gray-900">
          Insurance Information
        </h3>
        <div className="flex justify-between  flex-wrap mt-2">
          <div>
            <h5 className="mt-2">Insurance Pilicy Number</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter the number"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Insurance Provider</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Insurance Provider"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-wrap mt-2">
          <div>
            <h5 className="mt-2">Coverage Amount</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Coverage Amount"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">
              Expiration date of Insurance ( if-applicable)
            </h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Expiration date"
              />
            </div>
          </div>
          <h3 className=" font-semibold leading-6 text-2xl mt-12 text-gray-900">
            Certification and Specialization
          </h3>
        </div>
        <div className="flex flex-wrap justify-between mt-3">
          <div>
            <h5 className="mt-2">Relevant Certifications</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Relevant Certifications"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Area of Expertise</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Area of Expertise"
              />
            </div>
          </div>
        </div>
        <h3 className=" font-semibold leading-6 text-2xl mt-12 text-gray-900">
          References and Permissions
        </h3>

        <div className="flex flex-wrap justify-between mt-3">
          <div>
            <h5 className="mt-2">Cleint References</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Cleint References"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Contact number</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Contact number"
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
            I hereby grant consent to Globallegals for a background check,
            including professional and educational details. I authorize the
            collection of necessary information for verification purposes. The
            results will be handled confidentially, in accordance with
            Globallegals&apos; privacy policy. I release Globallegals and its
            representatives from any liability related to this process.&quot;
          </label>
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
        <div>
          <h3 className=" font-semibold leading-6 text-2xl mt-11 text-gray-900">
            Professional Enhancement
          </h3>

          <div className="flex justify-between flex-row w-full mt-2">
            <p className="mt-3">
              Boost Your Profile! Connect Google Reviews and Testimonials to
              showcase your expertise. Click below to
              <br /> elevate your professional reputation on Global legals
            </p>
            <button
              type="button"
              className="rounded-md bg-white px-20 py-0 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid border-black"
            >
              <div className="flex">
                <img src={GoogleImage} alt="Not found" />
                <p className=" ml-3">Connect with Google</p>
              </div>
            </button>
          </div>
        </div>
        <div className="flex-1 border-t border-gray-300 mt-3"></div>
        <div className="flex flex-wrap justify-between mt-3">
          <div>
            <h5 className="mt-2">Linkedin profile</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Linkedin profile"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Twitter Profile</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Twitter Profile"
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

        <div className="flex justify-between mt-7">
          <div>
            <button className="rounded-md text-white bg-blue-800 border-blue-800 px-20 py-2 text-sm font-semibol shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid">
              iam not a robot
            </button>
          </div>
          <div>
            <button className="rounded-md text-white bg-blue-800 border-blue-800 px-20 py-2 text-sm font-semibol shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid ">
              Save & Submit
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 border-t border-gray-300 mt-11"></div>
      <div className="mt-7 ml-40">
        <span className="text-black">Need Assistance?</span> If you have any
        questions or need further assistance, feel free to contact our support
        team a <span className="text-blue-800">support@globallegals.com</span>
      </div>
    </>
  );
}
