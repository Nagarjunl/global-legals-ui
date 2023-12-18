// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Dropdown() {
//   return (
//     <Menu as="div" className=" text-left">
//       <div>
//         <Menu.Button className=" border border-solid border-gray-300 flex w-full justify-between  rounded-md bg-white px-8 py-3 mt-2 text-sm font-[400] text-gray-400 shadow-sm  ring-inset ring-gray-300 hover:bg-gray-50">
//           Select from dropdown
//           <ChevronDownIcon
//             className="-mr-1 h-5 w-5 text-gray-400"
//             aria-hidden="true"
//           />
//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                     "block px-4 py-2 text-sm"
//                   )}
//                 >
//                   Account settings
//                 </a>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                     "block px-4 py-2 text-sm"
//                   )}
//                 >
//                   Support
//                 </a>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                     "block px-4 py-2 text-sm"
//                   )}
//                 >
//                   License
//                 </a>
//               )}
//             </Menu.Item>
//             <form method="POST" action="#">
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     type="submit"
//                     className={classNames(
//                       active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                       "block w-full px-4 py-2 text-left text-sm"
//                     )}
//                   >
//                     Sign out
//                   </button>
//                 )}
//               </Menu.Item>
//             </form>
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   );
// }
import React from "react";

const Dropdown = () => {
  return (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="text-gray-400 font-aspekta text-base font-normal bg-white  focus:outline-none  rounded-lg  px-8  text-center inline-flex items-center justify-between dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-1s mt-2 py-[11px]  pr-20 "
        type="button"
      >
        Dropdown button{" "}
        <svg
          class="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
