import React from "react";
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
import ReCAPTCHA from "react-google-recaptcha";
import BanerPerson from "../assets/New_folder/banner_person_img.svg";

const Homepage = () => {
  return (
    <>
      <div className="bg-green-800">
        <Nav />
        <div className="grid grid-cols-2  max-md:grid-cols-1">
          <div className=" grid items-center justify-center">
            <div>
              <h1 className="text-white font-circular-std  text-4xl flex font-bold ">
                Effortlessly Locate the Ideal
              </h1>
              <p className="text-white font-thin italic text-4xl">
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
                    <Link to="/profile">
                      <IoSearchOutline className="h-6 w-6" />
                    </Link>
                  </button>
                </div>
              </form>
              <div className="inline-flex flex-wrap mt-4 gap-3 mb-0 sm:mb-0">
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
          <div>
            <img src={RemovalImg} />
          </div>
        </div>
      </div>
      <div className="mx-auto container sm:px-6 lg:px-8">
        <div className="grid grid-flow-row gap-5">
          <div className="max-sm:grid justify-center">
            <h2>Services we Offer</h2>
            <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1   ">
              <div className="">
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
      <div className="bg-yellow-50 mt-10">
        <div className="mx-auto container sm:px-6 lg:px-8">
          <div className="grid grid-flow-row gap-5">
            <div className="mt-16 b-yellow-50 ">
              <p className="self-stretch text-5xl font-bold max-md:text-start">
                The best part? <br /> Everything.
              </p>
              <div className=" grid grid-cols-2 gap-x-5 max-md:grid-cols-1  max-lg:grid-cols-1 max-xl:grid-cols-2">
                <div className="grid items-center max-lg:justify-center">
                  <div>
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
                <div className="grid justify-center items-start  relative">
                  <div className="max-md: justify-center items-center p-5">
                    <img src={containerThree} alt="user_image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-white mt-10">
        <div className="mx-auto container sm:px-6 lg:px-8">
          <div className="grid grid-flow-row gap-5">
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 max-lg:grid-cols-1  ">
              <div>
                <div className="relative max-lg:grid justify-center p-5 ">
                  <img src={usersmile} alt="user_image_two" />
                  <div className="absolute  right-28 bottom-5  rounded-full bg-white bg-opacity-20 p-3  backdrop-blur-md backdrop-filter text-center">
                    <span className="p-1 text-xl font-normal text-white">
                      Global Legals <br />
                    </span>
                    <span className="p-1 text-sm font-normal text-center text-white">
                      Founder, CTO
                    </span>
                  </div>
                  {/*  */}
                </div>
              </div>
              <div className="grid justify-center items-center ">
                <div className="m-5">
                  <blockquote className=" text-4xl font-serif italic">
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
      </div>
      <div className="bg-blue-50 mt-10">
        <div className="mx-auto container sm:px-6 lg:px-8">
          <h1 className="text-black font-bold ml-5 text-start font-circular-std md:text-4xl lg:text-4xl max-lg:text-4xl">
            Your Roadmap to Achieving Growth
          </h1>
          <div className="grid grid-flow-row gap-5">
            <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-lg:grid-cols-1 p-5">
              <div className="p-1 max-md:grid justify-center">
                <img src={RoadMapImg1} alt="business" />
              </div>
              <div className="p-1 max-md:grid justify-center">
                <img src={RoadMapImg1} alt="business" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-white mt-10">
        <div className="mx-auto container sm:px-6 lg:px-8">
          <div className="grid grid-cols-5 max-md:grid-cols-1 max-lg:grid-cols-1">
            <div className=" m-5 col-span-2 grid justify-center items-center ">
              <div className="p-6 ">
                <div className="text-5xl">
                  Get in Touch <br />
                  with Global <br /> Legals
                </div>
                <div className="text-xs pt-2">
                  Have questions, need assistance, or looking for legal <br />
                  guidance? Fill out the form below, and our team will get{" "}
                  <br />
                  back to you promptly. Your inquiries matter to us!
                </div>
              </div>
            </div>
            <div className="m-5 col-span-3 ">
              <div className="p-6 bg-[#eff6ff] rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                  <div>
                    <label
                      htmlFor="input1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
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
                      className="block text-sm font-medium text-gray-700"
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
                      className="block text-sm font-medium text-gray-700"
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
                      className="block text-sm font-medium text-gray-700"
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
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                <div className=" grid grid-cols-2 justify-center items-center mt-5 max-md:grid-cols-1  gap-3">
                  <div className="grid justify-center items-center  ">
                    <ReCAPTCHA sitekey="Your client site key" onChange={""} />
                  </div>
                  <div className="grid justify-center items-center">
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
      <div className="bg-white mt-32">
        <div className="mx-auto container sm:px-6 lg:px-8">
          <div className=" bg-gradient-to-r from-[#d38b5d] to-[#fea66d] m-5 grid grid-cols-5">
            <div className="col-span-3 py-4">
              {/*  */}
              <p className="text-black font-CircularStd text-3 md:text-5 italic font-bold leading-normal">
                Global Legals
              </p>
              <div>
                <p className="text-white font-CircularStd text-4 md:text-4xl font-bold leading-normal">
                  Discover the Perfect Professionals
                </p>
                <p className="text-white font-CircularStd text-3 md:text-4 font-medium leading-normal">
                  Your Expertise, Our Network, Perfect Match
                </p>
              </div>
              <button className="p-5 bg-black text-white">
                Explore Services
              </button>
              {/*  */}
            </div>
            <div className="relative col-span-2 grid justify-end items-end ">
              <div className=" absolute  w-44 right-0 bottom-0">
                <img src={BanerPerson} alt="image" className=" " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
