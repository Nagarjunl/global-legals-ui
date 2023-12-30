import GoogleImage from "../../assets/Google-image.png";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const LawyerEnterDetails = () => {
  const handleChange = () => {
    console.log("ReCaptcha");
  };
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    number: yup
      .string()
      .min(3, "number must be at least 10 characters")
      .required("number is required"),
    address: yup
      .string()
      .min(8, "address must be at least 30 characters")
      .required("address is required"),
    professional: yup
      .string()
      .min(8, "professional must be at least 30 characters")
      .required("professional is required"),
    practicingLaw: yup.string().required("practicing law is required"),
    LegalSpecialization: yup
      .string()
      .required("Legal Specialization is required"),
    Experience: yup
      .string()
      .min(3, "number must be at least 10 characters")
      .required(" number is required"),
    LicenseNumber: yup
      .string()
      .min(3, "Number must be at least 10 characters")
      .required("Number is required"),
    ServedTillNow: yup
      .string()
      .min(3, "Number must be at least 10 characters")
      .required("Number is required"),
    LawField: yup
      .string()
      .min(3, "Number must be at least 10 characters")
      .required("Number is required"),
    Languages: yup
      .string()
      .min(3, "Name must be at least 10 characters")
      .required("Name is required"),
    LinkedinProfile: yup
      .string()
      .min(3, "link profile not 5 matched")
      .required("profile not matched"),
    TwitterProfile: yup
      .string()
      .min(3, "Twitter profile not 5 matched")
      .required("profile not matched"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
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
                Personal Information
              </h3>
              <div>
                <div className="">
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Enter your full name
                  </h5>
                  <div className="mt-2">
                    <input
                      {...register("username")}
                      className="block w-full p-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your full name"
                    />
                    {errors.username && (
                      <p className="text-red-500">{errors.username.message}</p>
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Contact number
                  </h5>
                  <div className="mt-2">
                    <input
                      {...register("number")}
                      className="block w-full p-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your Contact number"
                    />
                    {errors.number && (
                      <p className="text-red-500">{errors.number.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <div className="">
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Enter Email Address
                  </h5>
                  <div className="mt-2">
                    <input
                      {...register("email")}
                      className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter Email Address"
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Location / Address
                  </h5>
                  <div className="mt-2">
                    <input
                      {...register("address")}
                      className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your location "
                    />
                    {errors.address && (
                      <p className="text-red-500">{errors.address.message}</p>
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
            </div>

            <div>
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Write a professional Bio
              </h5>
              <div className="mt-2">
                <textarea
                  rows={4}
                  {...register("professional")}
                  id="comment"
                  className="block w-full  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  placeholder="Write a professional Bio"
                />
                {errors.professional && (
                  <p className="text-red-500">{errors.professional.message}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
              <h3 className="font-medium leading-[34.32px] text-[24px] mt-2 text-gray-900 sm:col-span-6">
                Professional details
              </h3>
              <div className="sm:col-span-3">
                <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                  Name of practicing law firm
                </h5>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    {...register("practicingLaw")}
                    autoComplete="given-name"
                    placeholder="Enter Name"
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.practicingLaw && (
                    <p className="text-red-500">
                      {errors.practicingLaw.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-3">
                <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                  Legal Specialization
                </h5>

                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    {...register("LegalSpecialization")}
                    autoComplete="given-name"
                    placeholder="Enter Name"
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.LegalSpecialization && (
                    <p className="text-red-500">
                      {errors.LegalSpecialization.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-3 ">
                <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                  Years of Experience
                </h5>

                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    {...register("Experience")}
                    autoComplete="given-name"
                    placeholder="Enter Name"
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.Experience && (
                    <p className="text-red-500">{errors.Experience.message}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                  Bar Association License Number
                </h5>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    {...register("LicenseNumber")}
                    autoComplete="family-name"
                    placeholder="License Number"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.LicenseNumber && (
                    <p className="text-red-500">
                      {errors.LicenseNumber.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-3">
                <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                  Areas Served till now
                </h5>

                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    {...register("ServedTillNow")}
                    autoComplete="given-name"
                    placeholder="Enter Name"
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.ServedTillNow && (
                    <p className="text-red-500">
                      {errors.ServedTillNow.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-3">
                <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                  Law Field Specialized in
                </h5>

                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    {...register("LawField")}
                    autoComplete="given-name"
                    placeholder="Enter Name"
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.LawField && (
                    <p className="text-red-500">{errors.LawField.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-3">
                <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                  Languages Spoken
                </h5>

                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    {...register("Languages")}
                    autoComplete="given-name"
                    placeholder="Enter Name"
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.Languages && (
                    <p className="text-red-500">{errors.Languages.message}</p>
                  )}
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
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Linkedin profile
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  {...register("LinkedinProfile")}
                  id="first-name"
                  placeholder="Linkedin profile"
                  autoComplete="given-name"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.LinkedinProfile && (
                  <p className="text-red-500">
                    {errors.LinkedinProfile.message}
                  </p>
                )}
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
                  {...register("TwitterProfile")}
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="Twitter Profile"
                  className="block w-full  px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.TwitterProfile && (
                  <p className="text-red-500">
                    {errors.TwitterProfile.message}
                  </p>
                )}
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
              By proceeding, you confirm that you&apos;ve read, comprehended,
              and consent to abide by our
              <span className="text-blue-700 underline text-[12px]">
                Terms and Conditions.
              </span>
              Your commitment to reviewing our terms ensures a comprehensive
              understanding of the guidelines governing your use of Global
              Legals
            </label>
          </div>
          <div className="flex-1 border-t border-gray-300 mt-7"></div>
          <div className="flex justify-between flex-wrap mt-10 my-3">
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
};

export default LawyerEnterDetails;
