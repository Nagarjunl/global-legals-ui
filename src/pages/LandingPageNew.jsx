import * as React from "react";
import RemovalImg from "../assets/card_images/removal.png";
// import { FaRegCheckCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
// import image1 from "../assets/image 14.png";
// import image2 from "../assets/image 12.png";
// import Captacha from "../assets/image 34.png";
// import { FaCircleArrowRight } from "react-icons/fa6";
// import TextArea from "../components/textArea";
// import Dropdown from "../components/dropDown";
// import BanerPerson from "../assets/banner.png";
import CardOne from "../assets/New folder/image 6.png";
import CardTwo from "../assets/New folder/image 7.png";
import CardThree from "../assets/New folder/image 8.png";
import CardFour from "../assets/New folder/image 9.png";
// import containerThree from "../assets/container_3_image.png";
// import { FaYoutube } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaPinterest } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
import Globe from "../assets/image131.png";
import Card from "../components/Card";

const LandingPageNew = () => {
  return (
    <>
      <div className="bg-[#2C5530]">
        <div class=" pb-0 bg-right bg-cover  bg-[#2C5530]">
          <div className="w-full container mx-auto p-6  ">
            <div className="w-full flex items-center justify-between py-2 gap-2 flex-wrap  ">
              <a
                className="flex items-center text-white no-underline hover:no-underline font-bold text-2xl lg:text-2xl"
                href="#"
              >
                <span>
                  <img src={Globe} alt="" />
                </span>
                Global <br /> Legals
              </a>

              <div className="flex w-1/2 justify-end content-center flex-wrap  ">
                <a
                  className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 sm:block"
                  data-tippy-content="@twitter_handle"
                  href="https://twitter.com/intent/tweet?url=#"
                >
                  {"Home"}
                </a>
                <a
                  className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 "
                  data-tippy-content="#facebook_id"
                  href="https://www.facebook.com/sharer/sharer.php?u=#"
                >
                  {" Business Signup"}
                </a>
                <a
                  className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 "
                  data-tippy-content="#facebook_id"
                  href="https://www.facebook.com/sharer/sharer.php?u=#"
                >
                  {"FAQ"}
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#2C5530]">
            <div className="container pt-24 md:pt-38 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center  ">
              <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                <h1 className="text-white font-circular-std text-5xl flex font-bold">
                  Effortlessly Locate the Ideal
                </h1>
                <p className="text-white font-aleo text-5xl italic font-light ">
                  Professional Services
                </p>
                {/*  */}

                <form>
                  <div className="flex  ">
                    <input
                      type="search"
                      id="search"
                      className="  w-96 text-sm  p-3 items-center text-gray-900 border border-gray-300  bg-gray-50 "
                      placeholder="Search for any service in your county"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white inline-flex h-12 px-5 py-3 items-center flex-shrink-0 bg-[#00C26B]"
                    >
                      <IoSearchOutline className="h-6 w-6" />
                    </button>
                  </div>
                </form>
                <div className="inline-flex flex-wrap mt-4 gap-3 ">
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

              {/*  */}

              <div className="w-full xl:w-3/5 overflow-y-hidden ">
                <img
                  className="w-5/6 mx-auto sm:h-112 lg:mr-0 mb-0 slide-in-bottom"
                  src={RemovalImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card */}

      <div className="mx-auto py-32  max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-black  font-circular-std md:text-4xl lg:text-3xl max-lg:text-4xl">
          Services we Offer
        </h1>
        <div className=" flex  justify-start  items-start gap-5 flex-wrap ">
          <Card image={CardOne} />
          <Card image={CardTwo} />
          <Card image={CardThree} />
          <Card image={CardFour} />
        </div>
      </div>
    </>
  );
};

export default LandingPageNew;
