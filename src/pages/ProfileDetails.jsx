import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navigation from "../components/Navigation";
import ProfileCard from "../components/ProfileDetailsCard";
import logo from "../assets/logo.png";
import avatar2 from "../assets/Rectangle2.png";
import { PrimeryBadge } from "../components/PrimeryBadge";
import meeting from "../assets/meeting.png";
import GoogleMeetIcon from "../assets/googlemeet.svg";
import { BiLogoZoom } from "react-icons/bi";
import { FaSkype } from "react-icons/fa6";
import "../App.css";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: avatar2,
};

// const navigation = [
//   { name: "Dashboard", href: "#", current: true },
//   { name: "Team", href: "#", current: false },
//   { name: "Projects", href: "#", current: false },
//   { name: "Calendar", href: "#", current: false },
// ];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ProfileDetails = () => {
  return (
    <>
      <div className="min-h-screen ">
        <Disclosure as="nav" className="bg-white shadow-sm">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src={logo}
                        alt="Your Company"
                      />

                      <img
                        className="hidden h-8 w-auto lg:block"
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="border-t border-gray-200 pb-3 pt-4">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="px-10 py-10 max-md:px-6">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-8">
              <Navigation />
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
              {/* Profilecard */}
              <div className="mt-5 max-md:ml-4">
                <ProfileCard />
              </div>
              {/* ProfileDetails */}
              <div className=" max-md:px-2">
                <h2 className="mt-4  font-bold text-2xl">
                  Indiana USA Labor and Employment Attorney
                </h2>
                <p className="pt-2">
                  From our law office in Knoxville, Tennessee, attorney Seth
                  oakes, founder and owner of the Oakes Law Firm, provides
                  outstanding representation and support to a diverse range of
                  cilents across our region who have legal needs involves
                </p>
                <div className=" grid grid-rows-2 ">
                  <div className=" flex gap-2 mt-2">
                    <PrimeryBadge badgeText="Probate and estate administration" />
                    <PrimeryBadge badgeText="Business and commercial law" />
                    <PrimeryBadge badgeText="Criminal defense " />
                  </div>
                  <div className="flex gap-2 mt-2">
                    <PrimeryBadge badgeText="Drug Violations" />
                    <PrimeryBadge badgeText="Estate Planning" />
                    <PrimeryBadge badgeText="Bankruptcy" />
                  </div>
                </div>
                <div>
                  <p className="pt-5">
                    The Underwood Law Office, P.C., in Knoxville, Tennessee, is
                    a law firm that emphasizes protecting clients and providing
                    them justice when faced with a strenuous ordeal that arises
                    in the workplace. The firm is also knowledgeable in handling
                    issues related to estate planning and administration,
                    probate, wills and trusts and civil rights. When it comes to
                    complex issues pertaining to labor and employment law,
                    employee wage and hour laws, workers&apos; compensation or
                    wrongful termination, the firm stands steadfast and
                    committed to its clients and offers them a variety of
                    avenues to dictate efficacy in their case. The legal team at
                    the firm is acutely aware of the many stressors that one may
                    face when confronted with unethical employment practices
                    that has the potential to impact their livelihood for the
                    worse. The firm takes steps to ensure their clients know
                    their legal team inside and out and allows them to carry the
                    burden of their legal problems to the conclusion of their
                    case.The firm&#39;s founder, George T. Underwood Jr., has
                    over 30 years of experience in the legal field and has been
                    recognized by many prominent legal organizations for his
                    tireless advocacy.
                  </p>

                  <p className="pt-3">
                    Licensed to practice in Tennessee since 2013, attorney Oakes
                    has nearly 10 years of total legal experience
                  </p>
                </div>
                <div>
                  <h2 className="pt-5 font-bold">Articles Published</h2>
                  <p className="pt-3">
                    Perspectives on capital Punishment in America, Create Space,
                    2013 Searching Inquiry into the contours of capital
                    punishment in America. contribution features federal habeas
                    corpus protections for state-sentenced capital offenders and
                    the constitutionally of limits on “actual innocence”
                    equitable tolling
                  </p>
                </div>
                <div>
                  <h2 className="pt-5 font-bold">Cases Representated</h2>
                  <ul className="pl-8">
                    <li className="list-disc pt-1.5 text-blue-600">
                      RALPH JUNIOR LOWEV . Roy Province et al, 2021 Tenn., App
                      Lexis 400 ( Reg No 3204249.210)
                    </li>
                    <li className="list-disc pt-1 text-blue-600">
                      WATSON .V 2023 Tenn., App Lexis 170 ( Reg No 38948340)
                    </li>
                  </ul>
                </div>
              </div>
              {/* Meeting card */}
              <div className=" grid-rows-4  border-solid border-2 rounded-lg  py-5 mx-auto mt-4  sm:px-6 lg:px-8">
                <div className="flex justify-center items-center ">
                  <img src={meeting} />
                </div>
                <div className="grid-rows-4">
                  <h2 className="flex justify-center items-center font-medium text-lg mt-2">
                    Schedule a Meeting with us
                  </h2>
                  <p className="flex justify-center items-center py-2  ">
                    We&rsquo;re here to assist you. If you have legal concerns
                    or need professional advice, feel free to schedule a meeting
                    with one of our experienced lawyers
                  </p>
                  <div className="flex justify-center items-center  py-3">
                    <div className="flex-wrap max-lg:flex justify-center items-center gap-1 ">
                      <button
                        type="button"
                        className="inline-flex items-center  gap-x-1.5 rounded-md bg-white mr-2 px-4 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        <img src={GoogleMeetIcon} width={22} />
                        Schedule with google Meet
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center max-md:mt-2  gap-x-1.5 rounded-md bg-blue-50 mr-2 px-4 py-1.5 text-sm font-semibold text-blue-500 shadow-sm ring-1 ring-inset ring-blue-500 hover:bg-gray-50"
                      >
                        <BiLogoZoom size={22} />
                        Schedule with Zoom
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center max-md:mt-2 max gap-x-1.5 rounded-md bg-sky-50 mr-2 px-4 py-1.5 text-sm font-semibold text-sky-500 shadow-sm ring-1 ring-inset ring-sky-500 hover:bg-gray-50"
                      >
                        <FaSkype size={20} />
                        Schedule with Skype
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Form */}

              <div className="grid grid-cols-2 mt-6 max-md:grid-cols-1">
                <div className=" max-md:mb-8 ">
                  <div>
                    <h2 className=" font-bold">Law Firm Address</h2>
                    <p className="py-2">
                      10412 Kinston pike Suite 201
                      <br />
                      <span>Knoxville, TN 37922</span>
                    </p>

                    <a href="#" className="text-blue-600 font-semibold ">
                      Get Directions
                    </a>
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
                <div className=" border-solid border-2 gap-x-px	 rounded-lg px-6 py-4 ">
                  <form action="#" method="POST">
                    <h2 className=" font-bold text-2xl mb-[-20px]">
                      {" "}
                      Contact Form
                    </h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Enter your full name
                        </label>
                        <div className="mt-2">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your name"
                            autoComplete="email"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Enter Email Address
                        </label>
                        <div className="mt-2">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="name@gmail.com"
                            autoComplete="email"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Contact number
                        </label>
                        <div className="mt-2 ">
                          <Input
                            id="email"
                            name="email"
                            type="number"
                            placeholder="Enter contact number"
                            autoComplete="email"
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
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Address / pincode"
                            autoComplete="email"
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
                            id="about"
                            name="about"
                            rows={3}
                            placeholder="Short profile description"
                            className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={""}
                          />
                        </div>
                        <div className="flex items-center pt-4 ">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded bg-gray-00 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="remember-me"
                            className="ml-3 block font-medium text-sm leading-6 text-black"
                          >
                            Send me a copy of this mail
                          </label>
                        </div>
                        <p className=" pt-4 ">
                          {" "}
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
                      <PrimaryButton type="submit" buttonText="Send Mail" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <footer className="mt-6 ">
              <div className="flex justify-center items-center py-4 border-t-2 max-md:inline-block">
                <p className=" font-bold pr-2">Need Assistance?</p>
                <p className="pr-2">
                  If you have any questions or need further assistance, feel
                  free to contact our support team at
                </p>
                <a href="#" className="text-blue-600 ">
                  support@globallegals.com
                </a>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
