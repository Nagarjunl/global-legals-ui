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
  const [selectedDate2, setSelectedDate2] = useState(null);

  const onDateChange = (date, field) => {
    if (field == "dateOfLicenceing") {
      setSelectedDate(date);
      setValue("dateOfLicenceing", date, { shouldValidate: true });
    } else {
      setSelectedDate2(date);
      setValue("experienceDateOfInsurance", date, { shouldValidate: true });
    }
  };

  const handleChange = () => {
    console.log("ReCaptcha");
  };

  const schema = yup.object().shape({
    businessName: yup.string().required("Business name is required"),
    businessMail: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),
    businessPhoneNumber: yup
      .string()
      // .min(3, "number must be at least 10 characters")
      .required("Business number is required"),
    businessAddress: yup
      .string()
      // .min(8, "address must be at least 30 characters")
      .required("Address is required"),
    companyWebsite: yup
      .string(),
    // .min(8, "Company Website must be at least 30 characters")
    // .required("professional is required"),
    ownerAgentInformation: yup
      .string(),
    // .required("Legal Specialization is required"),
    licensingAuthority: yup
      .string(),
    // .required("Licensing Authority is required"),
    bondingCapacity: yup
      .string(),
    // .min(3, " Name is not BondingCapacity")
    // .required(" Name is required"),
    licenseNumber: yup
      .string(),
    // .min(3, "Number must be at least 10 characters")
    // .required("Number is required"),
    dateOfLicenceing: yup
      .date()
      .nullable()
      .required("Date is required")
      .max(new Date(), "Date cannot be in the future"),
    insurancePolicyNumber: yup
      .string(),
    // .min(3, "Number must be at least 10 characters")
    // .required("Number is required"),\
    insuranceProvider: yup
      .string(),
    // .min(3, "Number must be at least 10 characters")
    // .required("Number is required"),
    coverageAmount: yup
      .string(),
    // .min(3, "Number must be at least 10 characters")
    // .required("Number is required"),
    experienceDateOfInsurance: yup
      .date()
      .nullable()
      .required("Date is required")
      .max(new Date(), "Date cannot be in the future"),
    areasCovered: yup
      .string(),
    // .min(3, "Name must be at least AreasCovered")
    // .required("Name is required"),
    feeStructure: yup
      .string(),
    // .min(3, "Name must be at least AreasCovered")
    // .required("profile not matched"),
    typesOfBonds: yup
      .string(),
    bondsmanExperience: yup
      .string(),
    linkedInProfile: yup
      .string(),
    twitterProfile: yup
      .string(),
    clientReferences: yup
      .string(),
    referenceNumber: yup
      .string(),
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
              <div className="sm:col-span-2">

                <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="">
                    <h5 className="font-normal leading-[17.16px] text-[12px]">
                      Full Legal Business Name
                    </h5>
                    <div className="mt-2">
                      <input
                        {...register("businessName")}
                        className="block w-full p-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Business Name"
                      />
                      {errors.businessName && (
                        <p className="text-red-500">
                          {errors.businessName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="">
                    <h5 className="font-normal leading-[17.16px] text-[12px]">
                      Business Address
                    </h5>
                    <div className="mt-2">
                      <input
                        {...register("businessAddress")}
                        className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Business Address"
                      />
                      {errors.businessAddress && (
                        <p className="text-red-500">
                          {errors.businessAddress.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="mt-2">
                    <h5 className="font-normal leading-[17.16px] text-[12px]">
                      Business Email Address
                    </h5>
                    <div className="mt-2">
                      <input
                        {...register("businessMail")}
                        className="block w-full p-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Business Email Address"
                      />
                      {errors.businessMail && (
                        <p className="text-red-500">
                          {errors.businessMail.message}
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
                        {...register("businessPhoneNumber")}
                        className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter your location "
                      />
                      {errors.businessPhoneNumber && (
                        <p className="text-red-500">
                          {errors.businessPhoneNumber.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="mt-2">
                    <h5 className="font-normal leading-[17.16px] text-[12px]">
                      Company website
                    </h5>
                    <div className="mt-2">
                      <input
                        {...register("companyWebsite")}
                        className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Company Website"
                      />
                      {errors.companyWebsite && (
                        <p className="text-red-500">
                          {errors.companyWebsite.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-2">
                    <h5 className="font-normal leading-[17.16px] text-[12px]">
                      Owner Agent Information
                    </h5>
                    <div className="mt-2">
                      <input
                        {...register("ownerAgentInformation")}
                        className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Owner Agent Information"
                      />
                      {errors.ownerAgentInformation && (
                        <p className="text-red-500">
                          {errors.ownerAgentInformation.message}
                        </p>
                      )}
                    </div>
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
                  {...register("licenseNumber")}
                  placeholder="Enter License Number"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.licenseNumber && (
                  <p className="text-red-500">{errors.licenseNumber.message}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Date of Licensing
              </h5>
              <div className="mt-2">
                <DatePicker
                  selected={selectedDate}
                  onChange={(e) => { onDateChange(e, "dateOfLicenceing") }}
                  placeholder="Enter date of licensing"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.dateOfLicenceing && (
                  <p className="text-red-500">{errors.dateOfLicenceing.message}</p>
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
                  {...register("licensingAuthority")}
                  placeholder="Enter Licensing Authority"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.licensingAuthority && (
                  <p className="text-red-500">
                    {errors.licensingAuthority.message}
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
                  {...register("bondingCapacity")}
                  placeholder="Enter Bonding Capacity"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.bondingCapacity && (
                  <p className="text-red-500">
                    {errors.bondingCapacity.message}
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
                  {...register("insurancePolicyNumber")}
                  placeholder="Enter Insurance Policy Number"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.insurancePolicyNumber && (
                  <p className="text-red-500">
                    {errors.insurancePolicyNumber.message}
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
                  {...register("insuranceProvider")}
                  placeholder="Enter Insurance Provider"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.insuranceProvider && (
                  <p className="text-red-500">
                    {errors.insuranceProvider.message}
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
                  {...register("coverageAmount")}
                  placeholder="Enter Coverage Amount"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.coverageAmount && (
                  <p className="text-red-500">{errors.coverageAmount.message}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Experience Date of Insurance
              </h5>
              <div className="mt-2">
                <DatePicker
                  selected={selectedDate2}
                  onChange={(e) => { onDateChange(e, "") }}
                  placeholder="Enter date of licensing"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.experienceDateOfInsurance && (
                  <p className="text-red-500">{errors.experienceDateOfInsurance.message}</p>
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
                    {...register("areasCovered")}
                    placeholder="Enter Areas Covered"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.areasCovered && (
                    <p className="text-red-500">
                      {errors.areasCovered.message}
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
                    {...register("feeStructure")}
                    placeholder="Enter Fee Structure"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.feeStructure && (
                    <p className="text-red-500">{errors.feeStructure.message}</p>
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
                    placeholder="Enter Types of bonds served"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("typesOfBonds")}
                  />
                  {errors.typesOfBonds && (
                    <p className="text-red-500">{errors.typesOfBonds.message}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                  Years of Experience as a Bail Bondsman
                </h5>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="year of experience"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("bondsmanExperience")}
                  />
                  {errors.bondsmanExperience && (
                    <p className="text-red-500">{errors.bondsmanExperience.message}</p>
                  )}
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
                  placeholder="Linkedin profile"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("linkedInProfile")}
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
                  placeholder="Twitter Profile"
                  className="block w-full  px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("twitterProfile")}
                />
              </div>
            </div>
          </div>
          <div className="flex mt-5">
            <input
              type="checkbox"
              id="myCheckbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
              {...register('peCheckbox')}
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
                Client References
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Enter client reference"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("clientReferences")}
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
                  placeholder="Enter number"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("referenceNumber")}
                />
              </div>
            </div>
          </div>
          <div className="flex mt-5">
            <input
              type="checkbox"
              id="myCheckbox"
              className="form-checkbox h-5 w-[46px] text-indigo-600"
              {...register('rpCheckboxOne')}
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
              {...register('rpCheckboxTwo')}
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
              <button type="submit" className="rounded-md mt-2 text-white bg-blue-800 border-blue-800 px-20 py-2 text-sm font-semibol shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid ">
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
