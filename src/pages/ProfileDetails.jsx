import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navigation from "../components/Navigation";
import ProfileCard from "../components/ProfileCard";
import logo from "../assets/logo.png";
import avatar2 from "../assets/Rectangle2.png";
import { PrimeryBadge } from "../components/PrimeryBadge";

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
      <div className="min-h-screen">
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

        <div className="py-10 px-15  sm:items-center ">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-8">
              <Navigation />
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
              <div className="mt-5 max-md:ml-4">
                <ProfileCard />
              </div>

              <div className=" max-md:px-4">
                <h2 className="mt-2 font-bold text-2xl">
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
                    <PrimeryBadge badgeText="Probate and estate administration" />
                    <PrimeryBadge badgeText="Probate and estate administration" />
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
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
