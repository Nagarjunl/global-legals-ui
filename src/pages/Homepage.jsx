import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/home/Nav";
import { IoSearchOutline } from "react-icons/io5";
import SecurityImg from "../assets/security.jpg";
import bondBailsman from "../assets/bond bailsman.jpg";
import privateInvestigators from "../assets/private investigators.jpg";
import lawyers from "../assets/lawyers.jpg";
import bailsMan from "../assets/bbm.jpg";

import ServiceCard from "../components/ServiceCard";
import CardOne from "../assets/New_folder/image 6.png";
import CardTwo from "../assets/New_folder/image 7.png";
import CardThree from "../assets/New_folder/image 8.png";
import CardFour from "../assets/New_folder/image 9.png";
import BlockText from "../components/BlockText";
import containerThree from "../assets/New_folder/usercomputer.svg";
import usersmile from "../assets/New_folder/usersmile.svg";
import RoadMapImg1 from "../assets/New_folder/image14.svg";
import ArrowCircleRight from "../assets/New_folder/arrow-circle-right.svg";
import ReCAPTCHA from "react-google-recaptcha";
import BanerPerson from "../assets/New_folder/banner_person_img.svg";
import Footer from "../components/footer/Footer";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../components/PrimaryButton";
import { useProfileEmailMutation, useCaptchaVerifyMutation } from "../services/userAPI";
import { Carousel } from 'flowbite-react';


const Homepage = () => {
  const captchaRef = useRef(null)
  const [ack, setAck] = useState();
  const [profileEmail, { isLoading: submitingEmailForm }] = useProfileEmailMutation();
  const [captchaRes] = useCaptchaVerifyMutation();

  const [searchKeys, setSearchKeys] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  const verifyRecaptcha = async () => {
    const token = captchaRef.current.getValue();
    try {
      await captchaRes(token).unwrap()
        .then((res) => {
          if (res.success) {
            clearErrors("captcha");
          }
        });
    } catch (error) {
      console.log("error");
    }
  };
  const submitMailForm = async (data) => {
    try {
      await profileEmail(data).unwrap()
        .then(() => {
          setAck("We will contact you soon!");
          reset();
          captchaRef.current.reset();
        });
    } catch (error) {
      console.log("error");
    }
  }

  const onSubmit = (formData) => {
    const result = { ...formData, superMail: "naga.career.at@gmail.com", mailFrom: "homePage" }
    submitMailForm(result);
  };

  useEffect(() => {
    setError("captcha", { type: 'custom', message: 'Please Verify Captcha' })
  }, []);

  return (
    <>
      <div className="bg-green-800">
        <Nav page={"home"} />
        <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1 min-h-[500px] px-[15px]">
          <div className="grid items-center justify-center my-7">
            <div>
              <p className="text-white italic text-[16px] mb-10 flex leading-[17.8px] font-medium mb-2">
                We're here for all your legal service needs? They are all here in one location
              </p>
              <h1 className="text-white font-circular-std flex text-[44px] leading-[55.66px] font-bold">
                Effortlessly Locate the Ideal
              </h1>
              <p className="text-white italic text-[44px] mb-10 leading-[52.8px] font-light mb-5">
                Professional Services
              </p>

              <form>
                <div className="flex">
                  <input
                    type="text"
                    id="search"
                    value={searchKeys}
                    className=" w-full text-sm  p-3 items-center text-gray-900 border border-gray-300  bg-gray-50 "
                    placeholder="search by state or legal profession"
                    onChange={(e) => setSearchKeys(e.target.value)}
                  />
                  <button
                    type="button"
                    className="text-white inline-flex h-12 px-5 py-0 sm:py-3 items-center flex-shrink-0 bg-[#00C26B]"
                    onClick={() => navigate(`/searchProfile/${searchKeys}`)}
                  >
                    <IoSearchOutline className="h-6 w-6" />
                  </button>
                </div>
              </form>
              <div className="inline-flex flex-wrap mt-5 gap-3 mb-0 sm:mb-0">
                <Link className="text-white  font-circular-std text-sm font-medium  justify-center  py-1 px-2 items-center   rounded-full border border-white "
                  to={`/searchProfile/Lawyers`}
                >
                  Lawyers
                </Link>
                <Link className=" text-white  font-circular-std text-sm font-medium  justify-center  py-1 px-2 items-center   rounded-full border border-white "
                  to={'/searchProfile/Private Investigators'}
                >
                  Private Investigators
                </Link>
                <Link className=" text-white  font-circular-std text-sm font-medium  justify-center  py-1 px-2 items-center   rounded-full border border-white "
                  to={'/searchProfile/Bail Bondsman'}
                >
                  Bail Bondsman
                </Link>
                <Link className=" text-white  font-circular-std text-sm font-medium  justify-center  py-1 px-2 items-center   rounded-full border border-white "
                  to={'/searchProfile/Security'}
                >
                  Security
                </Link>
              </div>
            </div>
          </div>
          <div className="grid items-center">
            <div className="h-56 sm:h-[450px] md:h-[325px] xl:h-[410px] 2xl:h-[410px]">
              <Carousel>
                <img src={lawyers} />
                <img src={bondBailsman} />
                <img src={privateInvestigators} />
                <img src={SecurityImg} />
              </Carousel>
            </div>

          </div>
        </div >
      </div >

      <div className="mx-auto container max-sm:px-6 p-[120px]">
        <div className="grid grid-flow-row gap-5">
          <div className="max-sm:grid justify-center">
            <h2 className="text-[44px] mb-2 leading-[55.66px] font-bold">
              Services we Offer
            </h2>
            <p className="font-normal text-[16px] text-[#5F5F5F] mb-10 text-justify">
              The idea of Global Legals is to help people of all ages find the legal professionals they’re looking for and
              needing very quickly and efficiently. Legal emergencies don't always occur between the hours of 9 am to 5 pm and our legal professionals are here because they are committed to personal, fast, transparent
              communication and service. This site contains old and new legal professionals who are very eager to
              help. Every legal professional is certified and bonded to their home state standards. We assure you that
              you will be contacted within minutes of contacting the legal professional of your choice. We aim to
              provide you with the most cost-efficient legal services. Here at Global Legals, we push for our legal
              professionals to give lower prices than any other website out there. Global Legals caters to the legal
              professionals that are here on this site pushing them to put the customers first.
            </p>
            <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:justify-items-center">
              <div>
                <ServiceCard
                  image={CardOne}
                  content={"Your Advocate Professionals"}
                  contentBold={"Legal Excellence"}
                />
              </div>
              <div>
                <ServiceCard
                  image={CardTwo}
                  content={"Sleath uncover"}
                  contentBold={"Truth, Find clues"}
                />
              </div>
              <div>
                <ServiceCard
                  image={CardThree}
                  content={"Freedom bonded, Swift"}
                  contentBold={"Release, Trusted"}
                />
              </div>
              <div>
                <ServiceCard
                  image={CardFour}
                  content={"Protection, Peace of"}
                  contentBold={"Mind, Safety"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 max-sm:px-6 p-[120px]">
        <div className="mx-auto container">
          {/* <div className="grid grid-flow-row gap-5"> */}
          <div className="b-yellow-50 ">
            <div className=" grid grid-cols-2 gap-x-5 max-md:grid-cols-1  max-lg:grid-cols-1 max-xl:grid-cols-2">
              <div className="grid items-center max-lg:justify-center">
                <div className="max-w-[481px]">
                  <p className="self-stretch text-[44px] mb-10 leading-[55.66px] font-bold max-md:text-start">
                    The best part? Everything.
                  </p>
                  <BlockText
                    heading={"Connect with Skilled Professionals"}
                    content={
                      "Discover an array of professional services at your fingertips."
                    }
                  />
                  <BlockText
                    heading={"Your Trusted Resource"}
                    content={
                      "Whether you need legal advice, investigative services, bail bonds assistance, or security solutions, we've got you covered"
                    }
                  />
                  <BlockText
                    heading={"Tailored Expertise"}
                    content={
                      "Find professionals with the specific talents and skills to address your unique needs."
                    }
                  />
                  <BlockText
                    heading={"Swift and Secure Assistance"}
                    content={
                      "Get prompt and reliable assistance from experienced experts in their respective fields."
                    }
                  />
                </div>
              </div>
              <div className="grid justify-center items-end  relative mt-10">
                <div className="relative justify-center">
                  <img src={containerThree} alt="user_image" />
                  <div className="absolute top-[50px] left-[57px] rounded-full bg-white bg-opacity-20 px-5 py-2  backdrop-blur-md backdrop-filter">
                    <p className=" text-[20px] font-medium text-white">
                      Services we bring to table
                    </p>
                  </div>
                  <div className="absolute top-[107px] left-[175px] rounded-full bg-white bg-opacity-20 px-5 py-2  backdrop-blur-md backdrop-filter">
                    <p className=" text-[20px] font-medium text-white">
                      At Affordable prices
                    </p>
                  </div>
                  <div className="absolute top-[164px] left-[57px] rounded-full bg-white bg-opacity-20 px-5 py-2  backdrop-blur-md backdrop-filter">
                    <p className=" text-[20px] font-medium text-white">
                      We Offer much more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      {/*  */}
      <div className="bg-white max-sm:px-6 p-[120px]">
        <div className="mx-auto container">
          <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
            <div className="sm:grid max-lg:justify-items-center lg:justify-items-end">
              <div className="relative max-lg:grid justify-center">
                <img src={usersmile} alt="user_image_two" />
                <div className="absolute  right-5 bottom-5  rounded-full bg-white bg-opacity-20 px-5 py-2  backdrop-blur-md backdrop-filter">
                  <p className=" text-[16px] font-normal text-white">
                    Global Legals
                  </p>
                  <p className="text-[12px] font-normal text-white">
                    Founder, CTO
                  </p>
                </div>
              </div>
            </div>
            <div className="grid justify-center items-center max-lg:justify-items-center  lg:justify-items-start">
              <div>
                <blockquote className=" text-4xl font-serif italic mb-8">
                  “When you want to create a business bigger than yourself, you
                  need a lot of help. thats what Global legals does”
                </blockquote>
                <span className=" text-lg text-gray-500 dark:text-gray-400 font-normal ">
                  Terry John Paul, Founder{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 max-sm:px-6 p-[120px]">
        <div className="mx-auto container">
          <h1 className="text-black font-bold text-[44px] mb-10 leading-[55.66px] text-start font-circular-std">
            Your Roadmap to Achieving Growth
          </h1>
          <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
            <div className="sm:grid ">
              <div className="relative">
                <img
                  src={RoadMapImg1}
                  alt="business"
                  className="w-[821px] max-h-[548px]"
                />
                <div className="absolute bottom-[26px] w-full">
                  <div className="flex align-center  mx-[20px] px-[32px] py-[20px] justify-between rounded-full bg-[#f5f5f5]">
                    <div>
                      <p className="font-bold text-[24px]">
                        Explore the legal Labyrinth
                      </p>
                      <p className="font-normal text-[18px] text-[#5F5F5F]">
                        Finding the Right Lawyer for your Needs
                      </p>
                    </div>
                    <img src={ArrowCircleRight} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:grid ">
              <div className="relative ">
                <img
                  src={bailsMan}
                  alt="business"
                  className="w-[821px] max-h-[548px]"
                />
                <div className="absolute bottom-[26px] w-full">
                  <div className="flex align-center  mx-[20px] px-[32px] py-[20px] justify-between rounded-full bg-[#f5f5f5]">
                    <div>
                      <p className="font-bold text-[24px]">
                        Your Freedom Matters
                      </p>
                      <p className="font-normal text-[18px] text-[#5F5F5F]">
                        Finding the Perfect Bail Bondsman
                      </p>
                    </div>
                    <img src={ArrowCircleRight} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white max-sm:px-6 p-[120px]">
        <div className="mx-auto container">
          <div className="grid grid-cols-5 max-md:grid-cols-1 max-lg:grid-cols-1">
            <div className=" col-span-2 grid justify-center items-center ">
              <div className="p-6">
                <div className="text-[44px] mb-1 max-w-[300px] leading-[62.92px] font-semibold">
                  Get in Touch with Global Legals
                </div>
                <div className="text-xs pt-2">
                  Have questions, need assistance, or looking for legal <br />
                  guidance? Fill out the form below, and our team will get
                  <br />
                  back to you promptly. Your inquiries matter to us!
                </div>
              </div>
            </div>
            <div className="col-span-3 ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-6 bg-[#eff6ff] rounded-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                    <div>
                      <label
                        htmlFor="input1"
                        className="block font-normal text-gray text-xs mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-3 border rounded-md w-full"
                        {...register("fullName", {
                          required: "This field is required",
                        })}
                      />
                      {errors?.fullName && (
                        <p className="font-normal leading-[17.16px] text-[12px] text-red-500 mt-2">
                          {errors?.fullName?.message}{" "}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="input2"
                        className="block font-normal text-gray text-xs mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="mt-1 p-2 border rounded-md w-full"
                        {...register("email", {
                          required: "This field is required",
                        })}
                      />
                      {errors?.email && (
                        <p className="font-normal leading-[17.16px] text-[12px] text-red-500 mt-2">
                          {errors?.email?.message}{" "}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                    <div>
                      <label
                        htmlFor="input1"
                        className="block font-normal text-gray text-xs mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 border rounded-md w-full"
                        {...register("contactNumber")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="input2"
                        className="block font-normal text-gray text-xs mb-2"
                      >
                        Preferred Contact method
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 border rounded-md w-full"
                        {...register("preferredContactMethod")}
                      />
                    </div>
                  </div>
                  <div className="grid mt-3 w-full">
                    <label
                      htmlFor="textarea"
                      className="block font-normal text-gray text-xs mb-2"
                    >
                      Inquiry details
                    </label>
                    <textarea
                      rows="4"
                      className="w-full p-2 border rounded-md"
                      {...register("about")}
                    ></textarea>
                  </div>
                  <div className=" grid grid-cols-2 justify-between  mt-5 max-md:grid-cols-1  gap-3">
                    {/* <div className="grid justify-start items-center  "> */}
                    <div>
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
                    <div className="grid sm:justify-end items-center">
                      {
                        !submitingEmailForm ?
                          <PrimaryButton type="submit" disabled={submitingEmailForm} buttonText="Submit" />
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
                    <h2 className=" font-bold text-2xl mb-[-20px] mt-6 text-green-600 dark:text-green-500 pb-3">{ack}</h2>
                    {/* </div> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white max-sm:px-6 px-[120px] py-[80px]">
        <div className="mx-auto container">
          <div className="relative bg-gradient-to-r from-[#d38b5d] to-[#fea66d] grid grid-cols-2">
            <div className="col-span-3 p-10">
              <p className="text-black font-CircularStd  italic font-bold text-[20px] mb-2 leading-[25.3px]">
                Global Legals
              </p>
              <div className="mb-3">
                <p className="text-white font-CircularStd font-bold text-[44px] mb-2 leading-[55.66px] ">
                  Discover the Perfect Professionals
                </p>
                <p className="text-white font-CircularStd text-[16px] leading-[20.24px]">
                  Your Expertise, Our Network, Perfect Match
                </p>
              </div>
              <button className="p-5 bg-black text-white">
                Explore Services
              </button>
            </div>
            <div className="lg:absolute sm:right-10 sm:bottom-0">
              <img
                src={BanerPerson}
                alt="image"
                className="w-[277px] h-[341px]"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
