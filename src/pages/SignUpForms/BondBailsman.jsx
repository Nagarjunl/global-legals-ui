import { useState } from "react";
import GoogleImage from "../../assets/Google-image.png";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BondBailsman() {
  const [selectedDate, setSelectedDate] = useState(null);
  const onDateChange = (date) => {
    setSelectedDate(date);
    setValue("date", date, { shouldValidate: true });
  };

  const handleChange = () => {
    console.log("ReCaptcha");
  };
  const schema = yup.object().shape({
    BusinessName: yup.string().required("Business Name is not required"),
    BusinessEmailAddress: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),
    BusinessPhoneNumber: yup
      .string()
      .min(3, "number must be at least 10 characters")
      .required("number is required"),
    BusinessAddress: yup
      .string()
      .min(8, "address must be at least 30 characters")
      .required("address is required"),

    CompanyWebsite: yup
      .string()
      .min(8, "CompanyWebsite must be at least 30 characters")
      .required("professional is required"),
    LicensingAuthority: yup
      .string()
      .required("Licensing Authority is required"),
    OwnerAgentInformation: yup
      .string()
      .required("Legal Specialization is required"),
    BondingCapacity: yup
      .string()
      .min(3, " Name is not BondingCapacity")
      .required(" Name is required"),
    LicenseNumber: yup
      .string()
      .min(3, "Number must be at least 10 characters")
      .required("Number is required"),
    InsurancePolicyNumber: yup
      .string()
      .min(3, "Number must be at least 10 characters")
      .required("Number is required"),
    date: yup
      .date()
      .nullable()
      .required("Date is required")
      .max(new Date(), "date cannot be in the future"),
    InsuranceProvider: yup
      .string()
      .min(3, "Number must be at least 10 characters")
      .required("Number is required"),
    Amount: yup
      .string()
      .min(3, "Number must be at least 10 characters")
      .required("Number is required"),
    AreasCovered: yup
      .string()
      .min(3, "Name must be at least AreasCovered")
      .required("Name is required"),
    Structure: yup
      .string()
      .min(3, "Name must be at least AreasCovered")
      .required("profile not matched"),
    // TwitterProfile: yup
    //   .string()
    //   .min(3, "Twitter profile not 5 matched")
    //   .required("profile not matched"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto sm:px-6 lg:px-12">
          <div className="mt-10">
            <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4">
              <h3 className="lg:col-span-3 font-medium leading-[34.32px] text-[24px]">
                Business Information
              </h3>
              <div>
                <div className="">
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Full Legal Business Name
                  </h5>
                  <div className="mt-2">
                    <input
                      {...register("BusinessName")}
                      className="block w-full p-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your full name"
                    />
                    {errors.BusinessName && (
                      <p className="text-red-500">
                        {errors.BusinessName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Business Email Address
                  </h5>
                  <div className="mt-2">
                    <input
                      {...register("BusinessEmailAddress")}
                      className="block w-full p-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your Contact number"
                    />
                    {errors.BusinessEmailAddress && (
                      <p className="text-red-500">
                        {errors.BusinessEmailAddress.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Business Address
                  </h5>
                  <div className="mt-2">
                    <input
                      {...register("BusinessAddress")}
                      className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter Email Address"
                    />
                    {errors.BusinessAddress && (
                      <p className="text-red-500">
                        {errors.BusinessAddress.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Business Phone number
                  </h5>
                  <div className="mt-2">
                    <input
                      {...register("BusinessPhoneNumber")}
                      className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your location "
                    />
                    {errors.BusinessPhoneNumber && (
                      <p className="text-red-500">
                        {errors.BusinessPhoneNumber.message}
                      </p>
                    )}
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
              <div>
                <h5 className="font-normal leading-[17.16px] text-[12px]">
                  Company website
                </h5>
                <div className="mt-2">
                  <input
                    {...register("CompanyWebsite")}
                    className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Email Address"
                  />
                  {errors.CompanyWebsite && (
                    <p className="text-red-500">
                      {errors.CompanyWebsite.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <h5 className="font-normal leading-[17.16px] text-[12px]">
                  Owner Agent Information
                </h5>
                <div className="mt-2">
                  <input
                    {...register("OwnerAgentInformation")}
                    className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Email Address"
                  />
                  {errors.OwnerAgentInformation && (
                    <p className="text-red-500">
                      {errors.OwnerAgentInformation.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
            <h3 className="font-medium leading-[34.32px] text-[24px] sm:col-span-6">
              Licensing Credentials
            </h3>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                License Number
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  {...register("LicenseNumber")}
                  id="first-name"
                  placeholder="Enter number"
                  autoComplete="given-name"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.LicenseNumber && (
                  <p className="text-red-500">{errors.LicenseNumber.message}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Date of Licensing
              </h5>
              <div className="mt-2">
                <DatePicker
                  id="date"
                  selected={selectedDate}
                  onChange={onDateChange}
                  autoComplete="given-name"
                  placeholder="Enter date"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.date && (
                  <p className="text-red-500">{errors.date.message}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Licensing Authority
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  {...register("LicensingAuthority")}
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Licensing Authority"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.LicensingAuthority && (
                  <p className="text-red-500">
                    {errors.LicensingAuthority.message}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Bonding Capacity
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  {...register("BondingCapacity")}
                  id="first-name"
                  placeholder="Bonding capacity"
                  autoComplete="given-name"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.BondingCapacity && (
                  <p className="text-red-500">
                    {errors.BondingCapacity.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
            <h3 className="font-medium leading-[34.32px] text-[24px] text-gray-900 sm:col-span-6">
              Insurance Information
            </h3>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Insurance Policy Number
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  {...register("InsurancePolicyNumber")}
                  id="first-name"
                  placeholder="Enter number"
                  autoComplete="given-name"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.InsurancePolicyNumber && (
                  <p className="text-red-500">
                    {errors.InsurancePolicyNumber.message}
                  </p>
                )}
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
                  {...register("InsuranceProvider")}
                  id="first-name"
                  placeholder="Enter date"
                  autoComplete="given-name"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.InsuranceProvider && (
                  <p className="text-red-500">
                    {errors.InsuranceProvider.message}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:col-span-3 ">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Coverage Amount
              </h5>

              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  {...register("Amount")}
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="company website"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.Amount && (
                  <p className="text-red-500">{errors.Amount.message}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Experience Date of Insurance
              </h5>
              <div className="mt-2">
                <DatePicker
                  id="date"
                  selected={selectedDate}
                  onChange={onDateChange}
                  type="text"
                  name="first-name"
                  placeholder="Bonding capacity"
                  autoComplete="given-name"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.date && (
                  <p className="text-red-500">{errors.date.message}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
              <h3 className="font-medium leading-[34.32px] text-[24px]  sm:col-span-6">
                Service Details
              </h3>
              <div className="sm:col-span-3">
                <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                  Areas Covered
                </h5>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    {...register("AreasCovered")}
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Areas covered"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.AreasCovered && (
                    <p className="text-red-500">
                      {errors.AreasCovered.message}
                    </p>
                  )}
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
                    {...register("Structure")}
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Fee structure"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.Structure && (
                    <p className="text-red-500">{errors.Structure.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-3">
                <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                  Types of bonds served
                </h5>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Types of bonds served"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                  Years of Experience as a Bail Bondsman
                </h5>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="year of experience"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-medium leading-[34.32px] text-[24px]">
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
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full  px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex mt-5">
            <input
              type="checkbox"
              id="myCheckbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <label className="ml-2 text-[12px]">
              By proceeding, you confirm that you&apos;ve read, comprehended,
              and consent to abide by our{" "}
              <span className="text-blue-700 underline text-[12px]">
                Terms and Conditions.
              </span>
              Your commitment to reviewing our terms ensures a comprehensive
              understanding of the guidelines governing your use of Global
              Legals
            </label>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
            <h3 className="font-medium leading-[34.32px] text-[24px] sm:col-span-6">
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
                  placeholder="Client reference"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  placeholder="Enter number"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex mt-5">
            <input
              type="checkbox"
              id="myCheckbox"
              className="form-checkbox h-5 w-[46px] text-indigo-600"
            />
            <label className="ml-2 text-[12px]">
              I hereby authorize Globallegals to conduct a background check for
              the purpose of verifying the information provided in my profile.
              This background check may include, but is not limited to, a review
              of my professional licenses, business history, and any other
              relevant credentials. I understand that the information obtained
              through this background check will be used for verification
              purposes only and will be handled with the utmost confidentiality.
              I consent to this background check as part of the application
              process and acknowledge that it is a standard procedure for
              maintaining the integrity and trustworthiness
            </label>
          </div>
          <div className="flex mt-5">
            <input
              type="checkbox"
              id="myCheckbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <label className="ml-2 text-[12px]">
              By proceeding, you confirm that you&apos;ve read, comprehended,
              and consent to abide by our{" "}
              <span className="text-blue-700 underline">
                Terms and Conditions.
              </span>{" "}
              Your commitment to reviewing our terms ensures a comprehensive
              understanding of the guidelines governing your use of Global
              Legals
            </label>
          </div>
          <div className="flex-1 border-t border-gray-300 mt-7"></div>
          <div className="flex justify-between  flex-wrap mt-10 my-3">
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
      </form>
    </>
  );
}

export default BondBailsman;
