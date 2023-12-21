import GoogleImage from "../../assets/Google-image.png";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Application() {
  return (
    <>
      <div className="mx-auto px-4 max-w-full  sm:px-6 lg:px-12 xs:px-10">
        <div>
          <h3 className="font-medium leading-[34.32px] text-[24px] mt-10">
            Select your profession
          </h3>

          <div className="flex justify-between flex-row flex-wrap w-full sm:mt-2">
            <p className="text-[14px]">
              Choose your profession from the options below to tailor the form
              to your specific needs. Let&apos;s ensure we <br />
              provide you with the best experience on Globallegals
            </p>
            <Menu
              as="div"
              className="relative inline-block text-left w-[295px]"
            >
              <div>
                <Menu.Button className="inline-flex w-72 mt-2 justify-between gap-x-1.5 rounded-md bg-white px-4 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Bond Bailsmen
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-[295px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Account settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          License
                        </a>
                      )}
                    </Menu.Item>
                    <form method="POST" action="#">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block w-full px-4 py-2 text-left text-sm"
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </form>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4">
            <h3 className="lg:col-span-3 font-medium leading-[34.32px] text-[24px] w-full">
              Personal Information
            </h3>

            <div>
              <div>
                <h5 className="font-normal leading-[17.16px] text-[12px]">
                  Enter your full name
                </h5>
                <div className="mt-2">
                  <input
                    className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  text-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              <div className="mt-2">
                <h5 className="font-normal leading-[17.16px] text-[12px]">
                  Contact number
                </h5>
                <div className="mt-2">
                  <input
                    className="block w-full p-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your Contact number"
                  />
                </div>
              </div>
            </div>

            <div>
              <div>
                <h5 className="font-normal leading-[17.16px] text-[12px]">
                  Enter Email Address
                </h5>
                <div className="mt-2">
                  <input
                    className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Email Address"
                  />
                </div>
              </div>
              <div className="mt-2">
                <h5 className="font-normal leading-[17.16px] text-[12px]">
                  Location / Address
                </h5>
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
          <div className="mt-2">
            <h5 className="font-normal leading-[17.16px] text-[12px]">
              Write a professional Bio
            </h5>
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
        <div className="grid grid-cols-1 gap-x-6  sm:grid-cols-6">
          <h3 className="font-medium leading-[34.32px] text-[24px] mt-10  sm:col-span-6">
            Professional Credentials
          </h3>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Security License Number
            </h5>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Security License Number"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              License Expiry Date
            </h5>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Expiry Date"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3 ">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Years of Experience in Security
            </h5>

            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-2  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
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
        </div>
        <div>
          <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
            <h3 className="sm:col-span-6 font-medium leading-[34.32px] text-[24px]">
              Military Background - if applicable
            </h3>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Branch of Service
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Branch of services"
                  className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Rank at Discharge
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Rank at Discharge"
                  className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3 ">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Military Occupational Speciality ( MOS):
              </h5>

              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-2  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
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
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Years of military Service
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="year of service"
                  className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
            <h3 className="font-medium leading-[34.32px] text-[24px] sm:col-span-6">
              Business Information ( if - applicable)
            </h3>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Business Name
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Business Name"
                  className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Business Address
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Business Address"
                  className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3 ">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Business Email
              </h5>

              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-2  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
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
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Business Phone number
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Enter number"
                  className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
          <h3 className="font-medium leading-[34.32px] text-[24px] sm:col-span-6">
            Service Details
          </h3>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Type of Security Services Offered
            </h5>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Insurance pilicy number"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Coverage Areas
            </h5>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Coverage Areas"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Fee Structure
            </h5>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Fee Structure"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-6  sm:grid-cols-6 mt-10">
          <h3 className="font-medium leading-[34.32px] text-[24px] sm:col-span-6">
            Insurance Information
          </h3>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Insurance Pilicy Number
            </h5>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Insurance pilicy number"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Insurance Provider
            </h5>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Insurance provider"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Coverage Amount
            </h5>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="coverage Amount"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Expiration date of Insurance ( if-applicable)
            </h5>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Expiration date"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
          <h3 className="font-medium leading-[34.32px] text-[24px]  sm:col-span-6">
            Certification and Specialization
          </h3>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Relevant Certifications
            </h5>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Relevant Certifications"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Area of Expertise
            </h5>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Area of Expertise"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
          <h3 className="font-medium leading-[34.32px] text-[24px]  sm:col-span-6">
            References and Permissions
          </h3>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Cleint References
            </h5>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Relevant Certifications"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Contact number
            </h5>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Area of Expertise"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          <label className="ml-2 font-normal leading-[17.16px] text-[12px] mt-5">
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
          <label className="ml-2 font-normal leading-[17.16px] text-[12px] mt-5">
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
        <div className="mt-10">
          <h3 className="font-medium leading-[34.32px] text-[24px]">
            Professional Enhancement
          </h3>

          <div className="flex justify-between flex-wrap flex-row w-full mt-2">
            <p className="font-normal leading-[17.16px] text-[14px]">
              Boost Your Profile! Connect Google Reviews and Testimonials to
              showcase your expertise. Click below to
              <br /> elevate your professional reputation on Global legals
            </p>
            <button
              type="button"
              className="rounded-md mt-2 bg-white px-[48px] py-[12px] text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid border-black"
            >
              <div className="flex justify-center">
                <img
                  src={GoogleImage}
                  alt="Not found"
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
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Linkedin profile
            </h5>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Linkedin profile"
                autoComplete="given-name"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Twitter Profile
            </h5>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                placeholder="Twitter Profile"
                className="block w-full  px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          <label className="ml-2 font-normal leading-[17.16px] text-[12px] mt-5">
            By proceeding, you confirm that you&apos;ve read, comprehended, and
            consent to abide by our{" "}
            <span className="text-blue-700 underline">
              Terms and Conditions.
            </span>{" "}
            Your commitment to reviewing our terms ensures a comprehensive
            understanding of the guidelines governing your use of Global Legals
          </label>
        </div>

        <div className="flex justify-between flex-wrap mt-7">
          <div>
            <button className="rounded-md text-white bg-blue-800 border-blue-800 px-20 py-2 text-sm font-semibol shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid">
              iam not a robot
            </button>
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
}
