import { Link } from "react-router-dom";
import Nav from "../components/home/Nav";
import { IoSearchOutline } from "react-icons/io5";
import RemovalImg from "../assets/New_folder/removal.svg";
import ServiceCard from "../components/ServiceCard";
import CardOne from "../assets/New_folder/image 6.png";
import CardTwo from "../assets/New_folder/image 7.png";
import CardThree from "../assets/New_folder/image 8.png";
import CardFour from "../assets/New_folder/image 9.png";
import BlockText from "../components/BlockText";
import containerThree from "../assets/New_folder/usercomputer.svg";
import usersmile from "../assets/New_folder/usersmile.svg";
import RoadMapImg1 from "../assets/New_folder/image14.svg";
import RoadMapImg2 from "../assets/New_folder/image12.svg";
import ArrowCircleRight from "../assets/New_folder/arrow-circle-right.svg";
import ReCAPTCHA from "react-google-recaptcha";
import BanerPerson from "../assets/New_folder/banner_person_img.svg";
import Footer from "../components/footer/Footer";

const Homepage = () => {
  return (
    <>
      <div className="bg-green-800">
        <Nav />
        <div className="grid grid-cols-2 max-md:grid-cols-1 min-h-[500px] px-[15px]">
          <div className="grid items-center justify-center my-7">
            <div>
              <h1 className="text-white font-circular-std flex text-[44px] leading-[55.66px] font-bold">
                Effortlessly Locate the Ideal
              </h1>
              <p className="text-white italic text-[44px] mb-10 leading-[52.8px] font-light mb-5">
                Professional Services
              </p>
              <form>
                <div className="flex">
                  <input
                    type="search"
                    id="search"
                    className=" w-full text-sm  p-3 items-center text-gray-900 border border-gray-300  bg-gray-50 "
                    placeholder="Search for any service in your county"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white inline-flex h-12 px-5 py-0 sm:py-3 items-center flex-shrink-0 bg-[#00C26B]"
                  >
                    <Link to="/dashboard/searchProfile">
                      <IoSearchOutline className="h-6 w-6" />
                    </Link>
                  </button>
                </div>
              </form>
              <div className="inline-flex flex-wrap mt-5 gap-3 mb-0 sm:mb-0">
                <span className=" text-white  font-circular-std text-sm font-medium  justify-center  py-1 px-2 items-center   rounded-full border border-white ">
                  Lawyers
                </span>
                <span className=" text-white  font-circular-std text-sm font-medium  justify-center  py-1 px-2 items-center   rounded-full border border-white ">
                  Private Investigators
                </span>
                <span className=" text-white  font-circular-std text-sm font-medium  justify-center  py-1 px-2 items-center   rounded-full border border-white ">
                  Bail Bondsman
                </span>
                <span className=" text-white  font-circular-std text-sm font-medium  justify-center  py-1 px-2 items-center   rounded-full border border-white ">
                  Security
                </span>
              </div>
            </div>
          </div>
          <div className="grid items-end justify-center">
            <img src={RemovalImg} />
          </div>
        </div>
      </div>
      <div className="mx-auto container max-sm:px-6 p-[120px]">
        <div className="grid grid-flow-row gap-5">
          <div className="max-sm:grid justify-center">
            <h2 className="text-[44px] mb-10 leading-[55.66px] font-bold">
              Services we Offer
            </h2>
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
                  content={"Your Advocate Professionals"}
                  contentBold={"Legal Excellence"}
                />
              </div>
              <div>
                <ServiceCard
                  image={CardThree}
                  content={"Your Advocate Professionals"}
                  contentBold={"Legal Excellence"}
                />
              </div>
              <div>
                <ServiceCard
                  image={CardFour}
                  content={"Your Advocate Professionals"}
                  contentBold={"Legal Excellence"}
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
                    heading={"You Trusted Resource"}
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
                  “When you want to create a business bigger than yourself,
                  you need a lot of help. thats what Global legals does”
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
                <img src={RoadMapImg1} alt="business" className="w-[821px] max-h-[548px]" />
                <div className="absolute bottom-[26px] w-full">
                  <div className="flex align-center  mx-[20px] px-[32px] py-[20px] justify-between rounded-full bg-[#f5f5f5]">
                    <div>
                      <p className="font-bold text-[24px]">Explore the legal Labyrinth</p>
                      <p className="font-normal text-[18px] text-[#5F5F5F]">Finding the Right Lawyer for your Needs</p>
                    </div>
                    <img src={ArrowCircleRight} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:grid ">
              <div className="relative ">
                <img src={RoadMapImg2} alt="business" className="w-[821px] max-h-[548px]" />
                <div className="absolute bottom-[26px] w-full">
                  <div className="flex align-center  mx-[20px] px-[32px] py-[20px] justify-between rounded-full bg-[#f5f5f5]">
                    <div>
                      <p className="font-bold text-[24px]">From Incarceration to Liberation</p>
                      <p className="font-normal text-[18px] text-[#5F5F5F]">How Bail Bonds Make Freedom Possible</p>
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
                      id="input1"
                      name="input1"
                      className="mt-1 p-3 border rounded-md w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="input2"
                      className="block font-normal text-gray text-xs mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      id="input2"
                      name="input2"
                      className="mt-1 p-2 border rounded-md w-full"
                    />
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
                      id="input1"
                      name="input1"
                      className="mt-1 p-2 border rounded-md w-full"
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
                      id="input2"
                      name="input2"
                      className="mt-1 p-2 border rounded-md w-full"
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
                    id="textarea"
                    name="textarea"
                    rows="4"
                    className="w-full p-2 border rounded-md"
                  ></textarea>
                </div>
                <div className=" grid grid-cols-2 justify-between  mt-5 max-md:grid-cols-1  gap-3">
                  <div className="grid justify-start items-center  ">
                    <ReCAPTCHA sitekey="Your client site key" onChange={""} />
                  </div>
                  <div className="grid sm:justify-end items-center">
                    <button className="bg-indigo-600 text-white px-10 p-2 rounded-md">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
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

      <div className="mx-auto container sm:px-6 lg:px-8 mt-[80px]">
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
