import * as React from "react";
// import "../App.css";
import RemovalImg from "../assets/New_folder/removal.svg";
// import { FaRegCheckCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
// import image1 from "../assets/image 14.png";
// import image2 from "../assets/image 12.png";
// import Captacha from "../assets/image 34.png";

// import TextArea from "../components/textArea";
// import Dropdown from "../components/dropDown";
import BanerPerson from "../assets/New_folder/banner_person_img.svg";
import CardOne from "../assets/New_folder/image 6.png";
import CardTwo from "../assets/New_folder/image 7.png";
import CardThree from "../assets/New_folder/image 8.png";
import CardFour from "../assets/New_folder/image 9.png";
import containerThree from "../assets/New_folder/usercomputer.svg";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Globe from "../assets/image131.png";
import ServiceCard from "../components/ServiceCard";
import BlockText from "../components/BlockText";
import usersmile from "../assets/New_folder/usersmile.svg";
import RoadMapImg1 from "../assets/New_folder/image13.svg";
import RoadMapImg2 from "../assets/New_folder/image14.svg";
import BadgeButton from "../components/badgeButton";
import Banner from "../components/Banner";
const LandingPageNew = () => {
  return (
    <>
      <div className="bg-[#2C5530]">
        <div class=" pb-auto w-auto bg-cover h-auto bg-[#2C5530]">
          <nav class="bg-green border-gray-200 dark:bg-gray-900 py-0 sm:py-14 px-0 sm:px-20">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a
                href="https://flowbite.com/"
                class="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img src={Globe} class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Global <br /> Legals
                </span>
              </a>
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-green focus:outline-none focus:ring-2 focus:ring-white dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 borderrounded-lg bg-green md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-green dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-3 text-white hover:bg-transparent   rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-3 text-white rounded hover:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Buisness Signup
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-3 text-white rounded hover:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="bg-[#2C5530]">
            <div className="container py-19 pb-0  sm:pb-18 px-12 mx-auto flex flex-wrap flex-col md:flex-row items-center  ">
              <div className="flex flex-col w-full xl:w-2/5 justify-start lg:items-start overflow-y-hidden mb-0  sm:mb-24">
                <h1 className="text-white font-circular-std  mt-5 text-4xl flex font-bold ">
                  Effortlessly Locate the Ideal
                </h1>
                <p className="text-white  text-4xl mt-5 mb-5  " id="aleo_font">
                  Professional Services
                </p>
                {/*  */}

                <form>
                  <div className="flex ">
                    <input
                      type="search"
                      id="search"
                      className=" w-96 text-sm  p-3 items-center text-gray-900 border border-gray-300  bg-gray-50 "
                      placeholder="Search for any service in your county"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white inline-flex h-12 px-5 py-0 sm:py-3 items-center flex-shrink-0 bg-[#00C26B]"
                    >
                      <IoSearchOutline className="h-6 w-6" />
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
              <div className="w-auto xl:w-3/5 overflow-y-hidden invisible md:visible ">
                <img
                  className="w-5/6 mx-auto sm:h-112 lg:mr-0 mb-0 slide-in-bottom"
                  src={RemovalImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto py-5 sm:py-32  max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="container my-12  mx-auto px-4 md:px-12">
          <h1 className="text-black  font-circular-std md:text-4xl lg:text-4xl max-lg:text-4xl">
            Services we Offer
          </h1>
          <div class="flex flex-wrap -mx-1 lg:-mx-4 justify-center md:justify-center lg:justify-center">
            <div class="grid place-items-center rounded-lg p-6 lg:overflow-visible md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
              <ServiceCard
                image={CardOne}
                content={"Your Advocate Professionals"}
                contentBold={"Legal Excellence"}
              />
            </div>
            <div class="grid place-items-center rounded-lg p-6 lg:overflow-visible md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
              <ServiceCard
                image={CardTwo}
                content={"Your Advocate Professionals"}
                contentBold={"Legal Excellence"}
              />
            </div>
            <div class="grid place-items-center rounded-lg p-6 lg:overflow-visible md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
              <ServiceCard
                image={CardThree}
                content={"Your Advocate Professionals"}
                contentBold={"Legal Excellence"}
              />
            </div>
            <div class="grid place-items-center rounded-lg p-6 lg:overflow-visible md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
              <ServiceCard
                image={CardFour}
                content={"Your Advocate Professionals"}
                contentBold={"Legal Excellence"}
              />
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="bg-[#FBFFE4]">
        <div className="mx-auto py-5 sm:py-12  max-w-6xl px-4 sm:px-6 lg:px-8 bg-[#FBFFE4]">
          <div class="grid grid-cols-1 gap-4 text-center sm:text-start lg:text-start sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="bg-500 p-10 ">
              <p className="self-stretch text-black text-5xl font-bold max-md:max-w-full ">
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

            <div className="hidden bg-500 md:grid lg:grid justify-center">
              <img src={containerThree} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto py-5 sm:py-12 md:p-32  max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class=" grid  grid-cols-1 gap-4   p-5 sm:p-10 md:p-24 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="hidden sm:grid">
              <img src={usersmile} alt="" />
            </div>

            <div class="  text-start md:text-start lg:text-start  justify-center p-5 pt-2 sm:pt-28 md:p-16 pl-20 md:pl-10">
              <blockquote class="sm:p-0 text-4xl font-serif italic">
                “When you want to create a business bigger than yourself, you
                need a lot of help. thats what Global legals does”
              </blockquote>
              <figure class="flex items-start mt-6 space-x-3 rtl:space-x-reverse">
                <cite class=" text-lg text-gray-500 dark:text-gray-400 font-mono">
                  Terry John Paul, Founder{" "}
                </cite>
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <h1 className="text-black text-center font-circular-std md:text-4xl lg:text-4xl max-lg:text-4xl">
        Services we Offer
      </h1>
      <div class="flex flex-wrap -mx-1 lg:-mx-4 justify-center md:justify-center lg:justify-center">
        <div class="grid place-items-center rounded-lg p-6 lg:overflow-visible md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <ServiceCard
            image={RoadMapImg2}
            content={"Your Advocate Professionals"}
            contentBold={"Legal Excellence"}
          />
        </div>
        <div class="grid place-items-center rounded-lg p-6 lg:overflow-visible md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <ServiceCard
            image={RoadMapImg1}
            content={"Your Advocate Professionals"}
            contentBold={"Legal Excellence"}
          />
        </div>
        {/*  */}
      </div>
      {/* <div className="relative pb-auto w-auto bg-cover gap-5 h-auto py-28 px-20">
        <div className=" p-10 flex flex-col items-start gap-5 justify-end self-stretch  bg-[#FF9C70] ">
          <p className="text-black font-CircularStd text-5 italic font-bold leading-normal">
            Global Legals
          </p>
          <div>
            <p className="text-white font-CircularStd text-5xl font-normal font-bold leading-normal">
              Discover the Perfect Professionals
            </p>
            <p className="text-white font-CircularStd text-4 font-normal font-medium leading-normal">
              Your Expertise, Our Network, Perfect Match
            </p>
          </div>

          <button className="p-5 bg-black text-white relative">
            Explore Services
          </button>
        </div>
        <div className="absolute right-[100px] top-[101px] hidden md:block ">
          <img
            src={BanerPerson}
            alt="image"
            className="  sm:w-60 md:w-60 lg:w-64 z-10"
          />
        </div>
      </div> */}

      <div className="relative pb-10 md:pb-auto w-full md:w-auto bg-cover gap-5 h-auto px-5 md:px-20 lg:px-32 py-14 md:py-28">
        <div className="p-5 md:p-10 flex flex-col items-center md:items-start gap-5 justify-end self-stretch bg-[#FF9C70]">
          <p className="text-black font-CircularStd text-3 md:text-5 italic font-bold leading-normal">
            Global Legals
          </p>
          <div>
            <p className="text-white font-CircularStd text-4 md:text-5xl font-normal font-bold leading-normal">
              Discover the Perfect Professionals
            </p>
            <p className="text-white font-CircularStd text-3 md:text-4 font-normal font-medium leading-normal">
              Your Expertise, Our Network, Perfect Match
            </p>
          </div>
          <button className="p-3 md:p-5 bg-black text-white relative">
            Explore Services
          </button>
        </div>

        <div className="absolute right-0 md:right-[160px] top-0 md:top-[77px] hidden md:block">
          <img
            src={BanerPerson}
            alt="image"
            className="w-40 md:w-60 lg:w-64 z-10"
          />
        </div>
      </div>
      <div className="items-stretch bg-white flex flex-col pt-12 pb-6">
        <div className="justify-center items-center border-b-[color:var(--Border,#D5E3EF)] flex w-full flex-col mt-8 px-16 py-6 border-b border-solid max-md:max-w-full max-md:px-5">
          <div className="w-full max-w-[1200px] max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                <div className=" gap-2 justify-end items-stretch flex flex-col max-md:mt-10">
                  <p className="text-slate-600 text-lg font-bold leading-7">
                    Exclusive Offers For You
                  </p>
                  <p className="text-slate-600 text-xs leading-5 whitespace-nowrap mt-2">
                    Get the latest updates & offers in your inbox
                  </p>

                  <form>
                    <div>
                      <div class="relative">
                        <input
                          type="search"
                          id="search"
                          class="block w-full rounded-full p-4 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter Your Email Address"
                          required
                        />
                        <button
                          type="submit"
                          class="offers_btn text-white absolute  end-2.5 bottom-2.5 bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 h-9 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col max-md:mt-10">
                  <p className="text-black text-lg font-bold">Community</p>
                  <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                    Customer Success Stories
                  </p>
                  <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                    Community Hub
                  </p>
                  <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                    Forum
                  </p>
                  <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                    Events
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col max-md:mt-10">
                  <p className="text-black text-lg font-bold whitespace-nowrap">
                    Business
                  </p>
                  <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                    About us
                  </p>
                  <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                    Global Certified
                  </p>
                  <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                    Global Enterprises
                  </p>
                  <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                    Contact Sales
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <p className="text-black text-lg font-bold whitespace-nowrap">
                    About
                  </p>
                  <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                    Careers
                  </p>
                  <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                    Press & News
                  </p>
                  <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                    Partnership
                  </p>
                  <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                    Privacy Policy
                  </p>
                  <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                    Terms of Service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center  flex justify-between gap-5 mt-6 px-[80px] py-[24px] max-md:max-w-full max-md:flex-wrap">
          <p className="text-slate-600 text-xs font-bold leading-5 grow whitespace-nowrap my-auto max-md:max-w-full">
            © 2023 Global Legals
          </p>
          <div className="items-stretch self-stretch flex justify-between gap-5 max-md:justify-center">
            <FaInstagram className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
            <FaFacebook className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
            <FaYoutube className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
            <FaTwitter className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
            <FaPinterest className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full  " />
            <FaLinkedinIn className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageNew;
