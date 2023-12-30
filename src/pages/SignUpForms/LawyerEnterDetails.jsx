import { useState } from "react";
import GoogleImage from "../../assets/Google-image.png";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";

import { useCreateLawyerMutation } from "../../services/userAPI";
import {
  usePostFileMutation,
  useDeleteFileMutation,
} from "../../services/fileUploadAPI";

import "../../styles.css";

const baseUrl = "http://127.0.0.1:3005/";


const LawyerEnterDetails = () => {

  const navigate = useNavigate();
  const [createLawyer] = useCreateLawyerMutation();
  const [postFile, { isLoading: isUpdating }] = usePostFileMutation();
  const [deleteFile] = useDeleteFileMutation();
  const [singleFile, setSingleFile] = useState("");

  const schema = yup.object().shape({
    clientName: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    contactNumber: yup
      .string()
      // .min(3, "number must be at least 10 characters")
      .required("Contact number is required"),
    address: yup
      .string()
      // .min(8, "address must be at least 30 characters")
      .required("Address is required"),
    professional: yup
      .string()
      // .min(8, "professional must be at least 30 characters")
      .required("Professional is required"),
    practicingLaw: yup
      .string(),
    // .required("practicing law is required"),
    legalSpecialization: yup
      .string(),
    // .required("Legal Specialization is required"),
    experience: yup
      .string(),
    // .min(3, "number must be at least 10 characters")
    // .required(" number is required"),
    licenseNumber: yup
      .string(),
    // .min(3, "Number must be at least 10 characters")
    // .required("Number is required"),
    servedTillNow: yup
      .string(),
    // .min(3, "Number must be at least 10 characters")
    // .required("Number is required"),
    lawField: yup
      .string(),
    // .min(3, "Number must be at least 10 characters")
    // .required("Number is required"),
    languages: yup
      .string(),
    // .min(3, "Name must be at least 10 characters")
    // .required("Name is required"),
    linkedInProfile: yup
      .string(),
    // .min(3, "link profile not 5 matched")
    // .required("profile not matched"),
    twitterProfile: yup
      .string(),
    // .min(3, "Twitter profile not 5 matched")
    // .required("profile not matched"),
    acceptTerms: yup
      .string()
    // .required("Please check this box"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange = () => {
    console.log("ReCaptcha");
  };

  const uploadFileAPI = async (e) => {
    const formData = new FormData();
    formData.append("idProof", e.target.files[0]);
    await postFile(formData)
      .unwrap()
      .then((res) => {
        setSingleFile(res.filename);
        setValue("idProof", res.filename);
      });
  };

  const removeImage = async (filename) => {
    await deleteFile(filename)
      .unwrap()
      .then(() => {
        setSingleFile("");
        setValue("idProof", "");
      })
      .catch((err) => console.log(err));
  };

  const submitLawyer = async (data) => {
    let response;
    try {
      response = await createLawyer(data);
      if (response) {
        navigate("/appoinments")
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log("error");
    }
  }

  function onSubmit(data) {
    console.log(data);
    submitLawyer(data);
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
                      {...register("clientName")}
                      className="block w-full p-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your full name"
                    />
                    {errors.clientName && (
                      <p className="text-red-500">{errors.clientName.message}</p>
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Contact number
                  </h5>
                  <div className="mt-2">
                    <input
                      {...register("contactNumber")}
                      className="block w-full p-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your Contact number"
                    />
                    {errors.contactNumber && (
                      <p className="text-red-500">{errors.contactNumber.message}</p>
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
                    {/* <label htmlFor="files">Select file</label> */}

                    {/* <input
                      type="file"
                      className="rounded-md bg-white px-3.5 mt-2 py-2.5 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid border-blue-500"
                      {...register("idProof")}
                      onChange={(e) => uploadFileAPI(e)}
                    /> */}
                    {singleFile.length > 0 && (
                      <div className="img-block bg-gray">
                        <img
                          className="img-fluid2"
                          src={`${baseUrl}/${singleFile}`}
                          alt="..."
                        />
                        <span
                          className="remove_img"
                          onClick={() => removeImage(singleFile)}
                        >
                          {"X"}
                        </span>
                      </div>
                    )}
                    {singleFile.length === 0 && (
                      <div className="upload-btn-wrapper-one">
                        <button
                          className="rounded-md bg-white px-3.5 mt-2 py-2.5 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid border-blue-500"
                        > Browse & Upload </button>
                        <input
                          type="file"
                          {...register("idProof")}
                          onChange={(e) => uploadFileAPI(e)}
                        />
                      </div>
                    )}
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
                    placeholder="Enter practicing law firm"
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
                    {...register("legalSpecialization")}
                    autoComplete="given-name"
                    placeholder="Enter NLegal Specialization"
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.legalSpecialization && (
                    <p className="text-red-500">
                      {errors.legalSpecialization.message}
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
                    {...register("experience")}
                    autoComplete="given-name"
                    placeholder="Enter Years of experience"
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.experience && (
                    <p className="text-red-500">{errors.experience.message}</p>
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
                    {...register("licenseNumber")}
                    autoComplete="family-name"
                    placeholder="License Number"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.licenseNumber && (
                    <p className="text-red-500">
                      {errors.licenseNumber.message}
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
                    {...register("servedTillNow")}
                    autoComplete="given-name"
                    placeholder="Enter Areas Served till now"
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.servedTillNow && (
                    <p className="text-red-500">
                      {errors.servedTillNow.message}
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
                    {...register("lawField")}
                    autoComplete="given-name"
                    placeholder="Enter Specialized in"
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.lawField && (
                    <p className="text-red-500">{errors.lawField.message}</p>
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
                    {...register("languages")}
                    autoComplete="given-name"
                    placeholder="Enter Language"
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.languages && (
                    <p className="text-red-500">{errors.languages.message}</p>
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
                  {...register("linkedInProfile")}
                  id="first-name"
                  placeholder="Linkedin profile"
                  autoComplete="given-name"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.linkedInProfile && (
                  <p className="text-red-500">
                    {errors.linkedInProfile.message}
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
                  {...register("twitterProfile")}
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="Twitter Profile"
                  className="block w-full  px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.twitterProfile && (
                  <p className="text-red-500">
                    {errors.twitterProfile.message}
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
              {...register('acceptTerms')}
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
          {errors.acceptTerms && <p className="text-red-500">{errors.acceptTerms.message}</p>}
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
