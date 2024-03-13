import { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReCAPTCHA from "react-google-recaptcha";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import GoogleImage from "../../assets/Google-image.png";

import { formData, formDataIdProof, formImgStatus } from "../../reducers/formTypeSlice";
import { usePostFileMutation, useDeleteFileMutation } from "../../services/fileUploadAPI";
import { useUpdateMemberMutation, useGetMemberFromSuperIdQuery, useCaptchaVerifyMutation } from "../../services/userAPI";

import "../../styles.css";


// const baseUrl = import.meta.env.VITE_API_URL;
const baseUrl = "https://api.chitmanager.com/";

const SecurityDetails = ({ handleStepClick }) => {
  const { memberId } = useParams();

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const captchaRef = useRef(null)
  const [captchaRes] = useCaptchaVerifyMutation();

  const [postFile, { isLoading }] = usePostFileMutation();
  const [deleteFile] = useDeleteFileMutation();
  const [singleFile, setSingleFile] = useState("");

  const formDatas = useSelector((state) => state.formType.formData);
  const formIdProof = useSelector((state) => state.formType.formDataIdProof);
  const imgStatus = useSelector((state) => state.formType.formImgStatus);

  const [updateMember, { isLoading: updatingMember }] = useUpdateMemberMutation();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    control,
    formState: { errors },
  } = useForm();

  const verifyRecaptcha = async () => {
    const token = captchaRef.current.getValue();
    try {
      await captchaRes(token).unwrap()
        .then((res) => {
          console.log(res);
          if (res.success) {
            clearErrors("captcha");
          }

        });
    } catch (error) {
      console.log("error");
    }
  };

  const uploadFileAPI = async (e) => {
    const formFileData = new FormData();
    formFileData.append("idProof", e.target.files[0]);
    await postFile(formFileData)
      .unwrap()
      .then((res) => {
        dispatch(formDataIdProof(res.filename));
        setSingleFile(res.filename);
        setValue("idProof", res.filename);
      });
  };

  const removeImage = async (filename) => {
    await deleteFile(filename)
      .unwrap()
      .then(async () => {
        setSingleFile("");
        setValue("idProof", "");
        dispatch(formDataIdProof(""));
      })
      .catch((err) => console.log(err));
  };

  const submitMembers = async (data) => {
    try {
      await updateMember(data).unwrap()
        .then(() => {
          dispatch(formData(""));
          dispatch(formDataIdProof(""));
          dispatch(formImgStatus(false));
          navigate(`/professional/profileDetails/${data.userId}`)
        });
    } catch (error) {
      console.log("error");
    }
  }

  const onSubmit = (data) => {
    const datas = { ...data, idProof: formIdProof || "" }
    if (!memberId) {
      dispatch(formData(datas));
      handleStepClick(1);
    } else {
      submitMembers(datas)
    }
  }

  const { data: member, isLoading: fetchingData }
    = useGetMemberFromSuperIdQuery(memberId, {
      skip: memberId === undefined,
    });


  useEffect(() => {
    if (!fetchingData && memberId !== undefined) {
      dispatch(formData(member));
      if (member.idProof !== "" && imgStatus === false) {
        dispatch(formImgStatus(true));
        dispatch(formDataIdProof(member.idProof));
      } else {
        dispatch(formDataIdProof(formIdProof));
      }
    }
  }, [member, fetchingData]);

  useEffect(() => {
    if (formDatas) {
      const keys = Object.keys(formDatas);
      keys.forEach((key) => {
        if (formDatas[key] !== undefined) {
          if (`${formDatas[key]}` === true || `${formDatas[key]}` === "true") {
            setValue(`${key}`, true);
            return false;
          }
          if (`${formDatas[key]}` === false || `${formDatas[key]}` === "false") {
            setValue(`${key}`, false);
            return false;
          }
          if (`${key}` === "idProof") {
            return false;
          }
          setValue(`${key}`, `${formDatas[key]}`);
        }
      });
    }
  }, [formDatas, setValue]);

  useEffect(() => {
    if (formIdProof !== "" || formIdProof !== undefined || formIdProof !== null || formIdProof !== "null") {
      setSingleFile(formIdProof);
    }
    setValue("idProof", `${formIdProof}`);
  }, [formIdProof, setValue, setSingleFile]);

  useEffect(() => {
    setError("captcha", { type: 'custom', message: 'Please Verify Captcha' })
  }, []);

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
                    Enter your full name *
                  </h5>
                  <div className="mt-2">
                    <input
                      className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your full name"
                      {...register("clientName", {
                        required: "This field is required"
                      })}
                    />
                    {errors.clientName && (
                      <p className="font-normal leading-[17.16px] text-[12px] text-red-500 mt-2">
                        {errors.clientName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Enter Email Address *
                  </h5>
                  <div className="mt-2">
                    <input
                      className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter Email Address"
                      {...register("businessMail", { required: "This field is required" }
                      )}
                    />
                    {errors.businessMail && (
                      <p className="font-normal leading-[17.16px] text-[12px] text-red-500 mt-2">
                        {errors.businessMail.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="mt-2">
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Contact Number *
                  </h5>
                  <div className="mt-2">
                    <input
                      className="block w-full p-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your Contact number"
                      {...register("contactNumber", { required: "This field is required" })}
                    />
                  </div>
                  {errors.contactNumber && (
                    <p className="font-normal leading-[17.16px] text-[12px] text-red-500 mt-2">
                      {errors.contactNumber.message}
                    </p>
                  )}
                </div>
                <div className="mt-2">
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Location / Address *
                  </h5>
                  <div className="mt-2">
                    <input
                      className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your location "
                      {...register("businessAddress", { required: "This field is required" })}
                    />
                  </div>
                  {errors.businessAddress && (
                    <p className="font-normal leading-[17.16px] text-[12px] text-red-500 mt-2">
                      {errors.businessAddress.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-dashed border-gray-900/25">
              <div className="flex justify-center">
                <div className="text-center mb-2 ">

                  {singleFile.length > 0 && (

                    <div className="img-block bg-gray">
                      <img
                        className="img-fluid2"
                        src={`${baseUrl}${singleFile}`}
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
                    <>
                      <div className="mt-4 flex">
                        <p className="mb-2 text-[16px] font-normal w-[204px]">
                          Upload your <br></br>current photo
                        </p>
                      </div>
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
                    </>
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
              <Controller
                name="professional"
                control={control}
                defaultValue=""
                render={({ field: { value, onChange } }) =>
                  <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={onChange}
                  />
                }
              />
              {errors.professional && (
                <p className="text-red-500">{errors.professional.message}</p>
              )}
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
                placeholder="Security License Number"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("licenseNumber")}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              License Expiry Date
            </h5>
            <div className="mt-2">
              {/* <Controller
                name="licenseExpiryDate"
                control={control}
                rules={{
                  required: "Date is required",
                  // max: { value: new Date(), message: "Date cannot be in the future" }
                }}
                render={({ field: { onChange, value } }) => {
                  return (
                    <DatePicker
                      onChange={onChange}
                      selected={value}
                      placeholder="Expiry Date"
                      className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  );
                }}
              />
              {
                errors.licenseExpiryDate && (
                  <p className="text-red-500">{errors.licenseExpiryDate.message}</p>
                )
              } */}
              <input
                type="text"
                {...register("licenseExpiryDate")}
                placeholder="Enter exipiration date of license"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3 ">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Years of Experience in Security
            </h5>

            <div className="mt-2">
              <input
                type="text"
                placeholder="company website"
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("companyWebsite")}
              />
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
                  placeholder="Branch of services"
                  className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("branchOfService")} />
              </div>
            </div>
            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Rank at Discharge
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Rank at Discharge"
                  className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("rankAtDischarge")}
                />
              </div>
            </div>
            <div className="sm:col-span-3 ">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Military Occupational Speciality ( MOS):
              </h5>

              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Mos"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("mos")}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                Years of military Service
              </h5>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="year of service"
                  className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("location")}
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
                  {...register("additionalMail")}
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
                  className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("businessPhoneNumber")}
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
                placeholder="Insurance pilicy number"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("feeStructure")}
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
                placeholder="Relevant Certifications"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("relevantCertifications")}
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
                placeholder="Area of Expertise"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("areaOfExpertise")}
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
              Client References
            </h5>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Client References"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("clientReferences")}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Contact Number
            </h5>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Contact Number"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            {...register("rpCheckboxOne", { required: "Please tick the box" })}
          />
          <label className="ml-2 font-normal leading-[17.16px] text-[12px]">
            I hereby grant consent to Globallegals for a background check,
            including professional and educational details. I authorize the
            collection of necessary information for verification purposes. The
            results will be handled confidentially, in accordance with
            Globallegals&apos; privacy policy. I release Globallegals and its
            representatives from any liability related to this process.&quot;
          </label>
        </div>
        {errors.rpCheckboxOne && (
          <p className="font-normal leading-[17.16px] text-[12px] text-red-500 mt-2">
            {errors.rpCheckboxOne.message}
          </p>
        )}

        <div className="flex mt-5">
          <input
            type="checkbox"
            id="myCheckbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
            {...register("rpCheckboxTwo", { required: "Please tick the box" })}
          />
          <label className="ml-2 font-normal leading-[17.16px] text-[12px]">
            By proceeding, you confirm that you&apos;ve read, comprehended, and
            consent to abide by our{" "}
            <span className="text-blue-700 underline">
              Terms and Conditions.
            </span>{" "}
            Your commitment to reviewing our terms ensures a comprehensive
            understanding of the guidelines governing your use of Global Legals
          </label>
        </div>
        {errors.rpCheckboxTwo && (
          <p className="font-normal leading-[17.16px] text-[12px] text-red-500 mt-2">
            {errors.rpCheckboxTwo.message}
          </p>
        )}

        <div className="flex-1 border-t border-gray-300 mt-7"></div>
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
            {/* <button className="mt-2 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 w-72">
              <div className="flex justify-center">
                <img
                  src={GoogleImage}
                  alt="Google Logo"
                  className="w-[20px] h-[20px]"
                />
                <p className="ml-3">Connect with Google</p>
              </div>
            </button> */}
          </div>
        </div>
        <div className="flex-1 border-t border-gray-300 mt-3"></div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 sm:grid-cols-6">

          <div className="sm:col-span-6">
            <h5 className="font-normal leading-[17.16px] text-[12px]">
              Calendly Event Link
            </h5>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                {...register("calendlyUrl")}
                placeholder="Calendly Event Link"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.calendlyUrl && (
                <p className="text-red-500">
                  {errors.calendlyUrl.message}
                </p>
              )}
            </div>
          </div>


          <div className="sm:col-span-3">
            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
              Linkedin profile
            </h5>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Linkedin profile"
                className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className="block w-full  px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            {...register("peCheckbox", { required: "Please tick the box" })}
          />
          <label className="ml-2 font-normal leading-[17.16px] text-[12px]">
            By proceeding, you confirm that you&apos;ve read, comprehended, and
            consent to abide by our{" "}
            <span className="text-blue-700 underline">
              Terms and Conditions.
            </span>{" "}
            Your commitment to reviewing our terms ensures a comprehensive
            understanding of the guidelines governing your use of Global Legals
          </label>
        </div>
        {errors.peCheckbox && (
          <p className="font-normal leading-[17.16px] text-[12px] text-red-500 mt-2">
            {errors.peCheckbox.message}
          </p>
        )}


        <div className="flex-1 border-t border-gray-300 mt-7"></div>

        <div className="grid  max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10 my-3">
          <div className="grid items-center max-md:justify-items-center min-md:justify-items-end">
            {errors?.captcha && (
              <p className="font-normal leading-[17.16px] text-[12px] text-red-500">
                {errors?.captcha.message}
              </p>
            )}
            <ReCAPTCHA
              sitekey="6LfAUjgpAAAAABQcBX1BtSezxeoNoBDoZk9XPS7T"
              onChange={() => verifyRecaptcha()}
              ref={captchaRef}
            />
          </div>
          <div className="grid">
            <div className="grid items-center md:justify-items-end max-md:justify-items-center ">
              <div className="flex">
                {member !== undefined &&
                  <Link
                    to={{
                      pathname: `/professional/profileDetails/${member?.userId}`
                    }}
                  >
                    <button
                      type="button"
                      className="rounded-md bg-white px-3 py-2 mr-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                  </Link>
                }

                <button type="submit" disabled={isLoading || updatingMember}
                  className="rounded-md text-white bg-blue-800 border-blue-800 px-3 py-2 text-sm font-semibol shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid ">
                  Save & Submit
                </button>

              </div>

            </div>
          </div>
        </div>
      </div>
    </form >
  );
};
export default SecurityDetails;
