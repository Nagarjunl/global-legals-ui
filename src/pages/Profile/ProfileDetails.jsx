import ProfileCard from "../../components/ProfileDetailsCard";
import meeting from "../../assets/meeting.png";
import CalendlyIcon from "../../assets/calendly icon.png";
import "../../App.css";
import PrimaryButton from "../../components/PrimaryButton";
import PropTypes from 'prop-types';
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetMemberQuery,
  useGetMemberFromSuperIdQuery,
  useProfileEmailMutation,
} from "../../services/userAPI";
import {
  useProfileViewCountApiMutation,
} from "../../services/profileAPI";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import "../../../src/styles.css";
import Nav from "../../components/Nav";
import Footer from "../../components/FooterProfessional";

import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addProfileViewCount } from "../../reducers/profileSlice";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileDetails = ({ hideSchedule }) => {
  const { mainId, slug } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profileViews = useSelector(state => state.profile.profileViews);

  const { data: supermember } = useGetMemberFromSuperIdQuery(mainId, {
    skip: mainId === undefined,
  });

  const { data: member, isLoading: fetchingMembers } = useGetMemberQuery(slug, {
    skip: slug === undefined,
  });

  const [profileEmail, { isLoading: submitingEmailForm }] = useProfileEmailMutation();
  const [profileViewCount] = useProfileViewCountApiMutation();

  const searchData = member ? member : supermember;

  const pathSwitch = () => {
    if (searchData.type === "Lawyers") {
      navigate(`/professional/lawyerDetails/${searchData.userId}`);
    }
    if (searchData.type === "Bail Bondsman") {
      navigate(`/professional/bondBailsman/${searchData.userId}`);
    }
    if (searchData.type === "Security") {
      navigate(`/professional/securityDetails/${searchData.userId}`);
    }
    if (searchData.type === "Private Investigators") {
      navigate(`/professional/privateInvestigators/${searchData.userId}`);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitMailForm = async (data) => {
    try {
      await profileEmail(data).unwrap()
        .then(() => {
          showToast();
        });
    } catch (error) {
      console.log("error");
    }
  }

  const onSubmit = (formData) => {
    const result = { ...formData, profileMail: searchData?.businessMail, mailFrom: "profile" }
    submitMailForm(result);
  };

  const showToast = () => toast("Your mail has been sent.");

  useEffect(() => {
    if (!fetchingMembers && slug !== undefined) {

      const date = new Date().toISOString().slice(0, 10)
      let profile;

      if (profileViews.length === 0) {

        profile = { date: date, slug: searchData.slug }
        dispatch(addProfileViewCount(profile));
        profileViewCount(profile);

      } else {

        const index = profileViews.findIndex(object => object.date >= date && object.slug === searchData.slug);
        console.log(index);
        if (index === -1) {
          profile = { date: date, slug: searchData.slug }
          dispatch(addProfileViewCount(profile));
          profileViewCount(profile);
        }
      }
    }
  }, [fetchingMembers, slug]);

  return (
    <>
      {!hideSchedule && (
        <Nav page={"profile"} />
      )}
      <div className="mx-auto container max-sm:px-6 lg:px-[120px] pb-3">
        <div className="mt-5">
          <ProfileCard data={searchData} hideSchedule={hideSchedule} />
        </div>

        {!hideSchedule ? (
          <>
            <div className=" grid-rows-4  border-solid border-2 rounded-lg  py-5 mx-auto mt-4  sm:px-6 lg:px-8">
              <div className="flex justify-center items-center ">
                <img src={meeting} />
              </div>
              <div className="grid-rows-4">
                <h2 className="flex justify-center items-center font-medium text-lg mt-2">
                  Schedule a Meeting with us
                </h2>
                <p className="flex justify-center items-center py-2 max-sm:px-2">
                  We&rsquo;re here to assist you. If you have legal concerns
                  or need professional advice, feel free to schedule a meeting
                  with one of our experienced lawyers
                </p>
                <div className="flex justify-center items-center  py-3">
                  <div className="flex max-sm:flex-wrap justify-center items-center gap-5">
                    {searchData?.calendlyUrl &&
                      <Link to={`${searchData?.calendlyUrl}`} target="_blank">
                        <button
                          type="button"
                          className="flex w-full gap-2 items-center justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <img src={CalendlyIcon} width={22} />
                          Connect with Calendly
                        </button>
                      </Link>
                    }
                    {searchData?.twitterProfile &&
                      <Link to={`${searchData?.twitterProfile}`} target="_blank">
                        <button
                          type="button"
                          className="flex  gap-2 w-full items-center justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <FaTwitter className="text-white aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
                          Follow On Twitter
                        </button>
                      </Link>
                    }

                    {searchData?.linkedInProfile &&
                      <Link to={`${searchData?.linkedInProfile}`} target="_blank">
                        <button
                          type="button"
                          className="flex gap-2 w-full items-center justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <FaLinkedinIn className="text-white aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
                          Follow On Linkedin
                        </button>
                      </Link>
                    }

                    {
                      searchData?.linkedInProfile === ""
                      && searchData?.linkedInProfile === ""
                      && searchData?.calendlyUrl === "" &&
                      <button
                        type="button"
                        className="flex gap-2 w-full items-center justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        No Social Media Profile
                      </button>
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
              <div className="grid xs:grid-cols-1 lg:grid-cols-1 gap-4 max-md:mb-8">
                <div>
                  <h2 className=" font-bold">Law Firm Address</h2>
                  <p className="py-2">
                    {
                      searchData?.address ? searchData?.address : searchData?.businessAddress
                    }
                  </p>

                  <div>
                    <h3 className="pt-2 font-bold">Payment method</h3>
                    <p className="py-1">
                      Online Payment, Accepts credit cards
                    </p>
                  </div>
                  <div>
                    <h3 className="pt-2 font-bold">Office Hours</h3>
                    <p className="py-1">Mon - Fri : 9:00 am - 4:00 pm</p>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="grid xs:grid-cols-1 lg:grid-cols-1 gap-4 border-solid border-2 rounded-lg  px-4 py-4">
                  <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h2 className=" font-bold text-2xl mb-[-20px]">
                        Contact Form
                      </h2>
                      <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label className="block text-sm font-medium leading-6 text-gray-900">
                            Enter your full name
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              placeholder="Full Name"
                              className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-blue-600 sm:text-sm sm:leading-6"
                              {...register("fullName", {
                                required: "Full Name is required",
                              })}
                            />

                            {errors?.fullName && (
                              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                {errors?.fullName?.message}{" "}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label className="block text-sm font-medium leading-6 text-gray-900">
                            Enter Email Address
                          </label>
                          <div className="mt-2">
                            <input
                              type="email"
                              placeholder="Email Address"
                              className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-blue-600 sm:text-sm sm:leading-6"
                              {...register("email", {
                                required: "Email is required",
                              })}
                            />

                            {errors?.email && (
                              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                {errors?.email?.message}{" "}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label className="block text-sm font-medium leading-6 text-gray-900">
                            Contact number
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              placeholder="Contact Number"
                              className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-blue-600 sm:text-sm sm:leading-6"
                              {...register("contactNumber")}
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Location / Zipcode
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              placeholder="Location"
                              className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-blue-600 sm:text-sm sm:leading-6"
                              {...register("location")}
                            />
                          </div>
                        </div>
                        <div className="col-span-full">
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Tell us more about your legal need
                          </label>
                          <div className="mt-2">
                            <textarea
                              rows={3}
                              placeholder="Short profile description"
                              className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              defaultValue={""}
                              {...register("about")}
                            />
                          </div>
                          <div className="flex items-center pt-4 ">
                            <input
                              id="remember-me"
                              type="checkbox"
                              className="h-4 w-4 rounded bg-gray-00 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              {...register("corbonCopy")}
                            />
                            <label
                              htmlFor="remember-me"
                              className="ml-3 block font-medium text-sm leading-6 text-black"
                            >
                              Send me a copy of this mail
                            </label>
                          </div>
                          <p className=" pt-4 ">
                            The information contained on this website is intended
                            to convey general information. It should not be
                            construed as legal advice or opinion. It is not an
                            offer to represent you, nor is it intended to create
                            an attorney-client relationship. The use of the
                            internet or this contact form for communication is not
                            necessarily a secure environment. Contacting a lawyer
                            or law firm via email through this service will not
                            create an attorney-client relationship, and
                            information will not necessarily be treated as
                            privileged or confidential.
                          </p>
                        </div>
                      </div>
                      <div className=" w-60 pt-5">
                        {
                          !submitingEmailForm ?
                            <>
                              <PrimaryButton type="submit" disabled={submitingEmailForm} buttonText="Submit" />
                            </>
                            :
                            <div>
                              <button
                                className="flex w-full justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                disabled="disabled"
                              >
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                              </button>
                            </div>
                        }
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {hideSchedule ? (
          <>
            <button
              className="flex w-full justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => pathSwitch()}
            >
              Edit Profile
            </button>
          </>
        ) : (
          ""
        )}
      </div>
      {!hideSchedule && (
        <div className="mx-auto container sm:px-6 lg:px-8 mt-[80px]">
          <Footer />
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default ProfileDetails;


ProfileDetails.propTypes = {
  hideSchedule: PropTypes.bool,
}