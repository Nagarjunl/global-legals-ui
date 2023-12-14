import BusinessList from "../components/bussinesslist";
import BusinessDrop from "../components/businessdrop";
import BusinessAmount from "../components/businessAmount";
import global from "../assets/Frame.png";
import profile from "../assets/Rectangle 2.png";
import GoogleImage from "../assets/Google image.png";
import Stepper from "../components/stepper";

function BusinessInformation() {
  return (
    <>
      <div className="flex justify-between flex-row .w-full mt-3 px-10">
        <img src={global} alt="Not found" />
        <img src={profile} alt="Not found" />
      </div>
      <div className="flex-1 border-t border-gray-300 mt-3"></div>

      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className=" ml-72 mt-11 w-[500px]  bg-blue-50 rounded-md ">
          <Stepper />
        </div>
        <div>
          <h3 className=" font-semibold leading-6 text-2xl mt-11 text-gray-900">
            Select your profession
          </h3>

          <div className="flex justify-between  flex-wrap flex-row w-full mt-2">
            <p className="mt-3">
              Choose your profession from the options below to tailor the form
              to your specific needs. Let&apos;s ensure we <br /> provide you
              with the best experience on Globallegals
            </p>
            <BusinessList />
          </div>
        </div>
        <div>
          <h3 className=" font-semibold leading-6 text-2xl mt-12 text-gray-900">
            Business Information
          </h3>
        </div>
        <div className="flex justify-between flex-wrap mt-2">
          <div>
            <h5 className="mt-2">Full Legal Business Name</h5>
            <div className="mt-2">
              <input
                className="block w-full sm:w-[580px] p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter the number"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Business Address</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter Address"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-wrap mt-2">
          <div>
            <h5 className="mt-2">Business Email Address</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="REnter Email Address"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Business Phone number</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter phone number"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-wrap mt-2">
          <div>
            <h5 className="mt-2">Company website</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="company website"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Owner Agent Information</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Owner Agent Information"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className=" font-semibold leading-6 text-2xl mt-12 text-gray-900">
            Licensing Credentials
          </h3>
        </div>
        <div className="flex justify-between flex-wrap mt-2">
          <div>
            <h5 className="mt-2">License Number</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter the number"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Date of Licensing</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Date of Licensing"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-wrap mt-2">
          <div>
            <h5 className="mt-2">Licensing Authority</h5>
            <div className="mt-2">
              <BusinessDrop />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Bonding Capacity</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Bonding Capacity"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className=" font-semibold leading-6 text-2xl mt-12 text-gray-900">
            Insurance Information
          </h3>
        </div>
        <div className="flex justify-between flex-wrap mt-2">
          <div>
            <h5 className="mt-2">Insurance Policy Number</h5>
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
            <h5 className="mt-1">Coverage Amount</h5>
            <div className="mt-1">
              <BusinessAmount />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Experience Date of Insurance</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Experience Date"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className=" font-semibold leading-6 text-2xl mt-12 text-gray-900">
            Service Details
          </h3>
        </div>
        <div className="flex justify-between  flex-wrap mt-2">
          <div>
            <h5 className="mt-2">Areas Covered</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Areas Covered"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Fee Structure</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Fee Structure"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-wrap mt-2">
          <div>
            <h5 className="mt-2">Types of bonds served</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Types of bonds served"
              />
            </div>
          </div>

          <div>
            <h5 className="mt-2">Years of Experience as a Bail Bondsman</h5>
            <div className="mt-2">
              <input
                className="block w-[580px]  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Years of Experience"
              />
            </div>
          </div>
        </div>
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
              className="rounded-md bg-white px-20 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid border-black"
            >
              <div className="flex">
                <img src={GoogleImage} alt="Not found" />
                <p className=" ml-3">Connect with Google</p>
              </div>
            </button>
          </div>
        </div>
        <div className="flex-1 border-t border-gray-300 mt-3"></div>
        <div className="flex justify-between flex-wrap mt-3">
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
        <div>
          <h3 className=" font-semibold leading-6 text-2xl mt-12 text-gray-900">
            References and Permissions
          </h3>
        </div>
        <div className="flex justify-between flex-wrap mt-2">
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
            I hereby authorize Globallegals to conduct a background check for
            the purpose of verifying the information provided in my profile.
            This background check may include, but is not limited to, a review
            of my professional licenses, business history, and any other
            relevant credentials. I understand that the information obtained
            through this background check will be used for verification purposes
            only and will be handled with the utmost confidentiality. I consent
            to this background check as part of the application process and
            acknowledge that it is a standard procedure for maintaining the
            integrity and trustworthiness
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
        <div className="flex justify-between mt-14">
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
      <div className="mt-11 ml-40">
        <span className="text-black">Need Assistance?</span> If you have any
        questions or need further assistance, feel free to contact our support
        team a <span className="text-blue-800">support@globallegals.com</span>
      </div>
    </>
  );
}

export default BusinessInformation;
