import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import DatePicker from 'react-datepicker';
import { useSelector } from 'react-redux'

import GoogleImage from "../../assets/Google-image.png";
import ReCAPTCHA from "react-google-recaptcha";

import {
  usePostFileMutation,
  useDeleteFileMutation,
} from "../../services/fileUploadAPI";
import { useCreatePrivateInvestigatorsMutation } from "../../services/userAPI";
import { useNavigate } from "react-router";


import "../../styles.css";

const baseUrl = "http://127.0.0.1:3005/";


const PrivateInvestigators = ({ handleStepClick }) => {

  const navigate = useNavigate();

  const [postFile, { isLoading }] = usePostFileMutation();
  const [deleteFile] = useDeleteFileMutation();
  const [singleFile, setSingleFile] = useState("");
  const [createPrivateInvestigators] = useCreatePrivateInvestigatorsMutation();
  const currentUser = useSelector((state) => state.user.id)

  const handleChange = () => {
    console.log("ReCaptcha");
  };

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();

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

  const submitPrivateMethod = async (data) => {
    data.userId = currentUser;
    const { idProof } = data;
    let proof = idProof.length === 0 ? "" : idProof
    data.idProof = proof;
    try {
      await createPrivateInvestigators(data).unwrap()
        .then(() => {
          handleStepClick(1);
        });
    } catch (error) {
      console.log("error");
    }
  }

  function onSubmit(data) {
    submitPrivateMethod(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container mx-auto sm:px-6 lg:px-12">
        <div className="mt-10">
          <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4">
            <h3 className="lg:col-span-3 font-medium leading-[34.32px] text-[24px] w-full">
              Personal Information
            </h3>

            <div className="sm:col-span-2">
              <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Enter your full name
                  </h5>
                  <div className="mt-2">
                    <input
                      className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  text-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                      placeholder="Enter your full name"
                      {...register("clientName", {
                        required: "Please enter the name"
                      })}
                    />
                    {errors.clientName && (
                      <p className="text-red-500">
                        {errors.clientName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Enter Email Address
                  </h5>
                  <div className="mt-2">
                    <input
                      className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter Email Address"
                      {...register("email", {
                        required: "Please enter the name"
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="mt-2">
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Contact number
                  </h5>
                  <div className="mt-2">
                    <input
                      className="block w-full p-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your Contact number"
                      {...register("contactNumber")}
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
                      {...register("location")}
                    />
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
          <div className="mt-2">
            <h5 className="font-normal leading-[17.16px] text-[12px]">
              Write a professional Bio
            </h5>
            <div className="mt-2">
              <textarea
                rows={4}
                className="block w-full  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Write a professional Bio"
                {...register("professionalBio")}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 grid  gap-x-6  sm:grid-cols-6">
          <h3 className="font-medium leading-[34.32px] text-[24px] sm:col-span-6">
            Professional Credentials
          </h3>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Private Investigator License Number (if applicable)
            </h5>
            <div className="mt-2">
              <input
                type="text"
                placeholder="License Number"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("licenseNumber")}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              License Expiry Date
            </h5>
            <div className="mt-2">
              <Controller
                name="licenseExpiryDate"
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <DatePicker
                      onChange={onChange}
                      selected={value}
                      placeholder="Enter date of licensing"
                      className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  );
                }}
              />
            </div>
          </div>
          <div className="sm:col-span-3 ">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Years of Experience as a Private Investigator:
            </h5>

            <div className="mt-2">
              <input
                type="text"
                placeholder="company website"
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("yearsOfExperience")}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
            <h3 className="font-medium leading-[34.32px] text-[24px] sm:col-span-6">
              Military Background ( for Army Veterans)
            </h3>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Branch of Service (if applicable)
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Branch of services"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("branchOfService")}
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Rank at Discharge (if applicable)
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Rank at Discharge"
                  className="block w-full px-2 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("rankAtDischarge")}
                />
              </div>
            </div>
            <div className="sm:col-span-3 ">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Military Occupational Specialty (MOS) (if applicable)
              </h5>

              <div className="mt-2">
                <input
                  type="text"
                  placeholder="MOS"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("mos")}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Years of Military Service (if applicable)
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="year of service"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("yms")}
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
                  placeholder="Business Name"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("businessName")}
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
                  placeholder="Business Address"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("businessAddress")}
                />
              </div>
            </div>
            <div className="sm:col-span-3 ">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Business Email
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Business Mail"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("businessMail")}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Business Phone number
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Enter number"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("businessPhoneNumber")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
          <h3 className="font-medium leading-[34.32px] text-[24px]  sm:col-span-6">
            Service Details
          </h3>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Type of Security Services Offered
            </h5>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Insurance pilicy number"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("tsso")}
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
                placeholder="Coverage Areas"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("coverageArea")}
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
                placeholder="Fee Structure"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("feeStructure")}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
          <h3 className="font-medium leading-[34.32px] text-[24px]  sm:col-span-6">
            Insurance Information
          </h3>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Insurance Pilicy Number
            </h5>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Insurance pilicy number"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("insurancePolicyNumber")}
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
                placeholder="Insurance provider"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("insuranceProvider")}
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
                placeholder="Coverage Amount"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("coverageAmount")}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Expiration date of Insurance ( if-applicable)
            </h5>
            <div className="mt-2">
              <Controller
                name="expirationDateOfInsurance"
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <DatePicker
                      onChange={onChange}
                      selected={value}
                      placeholder="Enter date of licensing"
                      className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  );
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
          <h3 className="font-medium leading-[34.32px] text-[24px] sm:col-span-6">
            Certification and Specialization
          </h3>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Relevant certifications for private investigations
            </h5>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Relevant Certifications"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("relevantCertifications")}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Specializations or areas of expertise
            </h5>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Area of Expertise"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("areaOfExpertise")}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="font-medium leading-[34.32px] text-[24px] text-gray-900">
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
            <h5 className="font-normal leading-[17.16px] text-[12px]  mt-2">
              Linkedin profile
            </h5>
            <div className="mt-2">
              <input
                type="text"
                autoComplete="given-name"
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
            {...register("peCheckboxOne")}
          />
          <label className="ml-2 text-[12px]">
            By proceeding, you confirm that you&apos;ve read, comprehended, and
            consent to abide by our{" "}
            <span className="text-blue-700 underline">
              Terms and Conditions.
            </span>{" "}
            Your commitment to reviewing our terms ensures a comprehensive
            understanding of the guidelines governing your use of Global Legals
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
                placeholder="Relevant Certifications"
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
                placeholder="Area of Expertise"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("referenceContactNumber")}
              />
            </div>
          </div>
        </div>

        <div className="flex mt-5">
          <input
            type="checkbox"
            id="myCheckbox"
            className="form-checkbox h-5 w-[29px] text-indigo-600"
            {...register("rpCheckboxOne")}
          />
          <label className="ml-2 text-[12px]">
            I hereby grant consent to Globallegals for a background check,
            including professional and educational details. I authorize the
            collection of necessary information for verification purposes. The
            results will be handled confidentially, in accordance with
            Globallegals&apos; privacy policy. I release Globallegals and its
            representatives from any liability related to this process.&quot;
          </label>
        </div>

        <div className="flex mt-5">
          <input
            type="checkbox"
            id="myCheckbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
            {...register("rpCheckboxTwo")}
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

        <div className="flex justify-between flex-wrap mt-7 my-3">
          <div>
            <ReCAPTCHA sitekey="Your client site key" onChange={handleChange} />
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-md mt-2 text-white bg-blue-800 border-blue-800 px-20 py-2 text-sm font-semibol shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid ">
              Save & Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PrivateInvestigators;
