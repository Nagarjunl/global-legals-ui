// import { CheckIcon } from "@heroicons/react/24/solid";

const steps = [
  { id: "1", name: "Personal Details", href: "#", status: "current" },
  { id: "2", name: "Payment done", href: "#", status: "upcoming" },
  { id: "3", name: "Verification", href: "#", status: "upcoming" },
];
console.log(steps);
export default function Example() {
  return (
    // <nav aria-label="Progress p-2">
    //   <ol
    //     role="list"
    //     classNameName="divide-y px-2  rounded-md   md:flex md:divide-y-0"
    //   >
    //     {steps.map((step, stepIdx) => (
    //       <li key={step.name} classNameName="relative md:flex md:flex-1 ">
    //         {step.status === "complete" ? (
    //           <a href={step.href} classNameName="group flex w-full items-start ">
    //             <span classNameName="flex items-center py-3 text-sm font-medium">
    //               <span classNameName="flex h-3 w-3 flex-shrink-0 items-center justify-start rounded-full bg-indigo-600 group-hover:bg-indigo-800">
    //                 <CheckIcon
    //                   classNameName="h-4 w-4 text-blue-400"
    //                   aria-hidden="true"
    //                 />
    //               </span>
    //               <span classNameName="ml-4 lg:text-xs pr-5	 font-medium text-blue-400 ">
    //                 {step.name}
    //               </span>
    //             </span>
    //           </a>
    //         ) : step.status === "current" ? (
    //           <a
    //             href={step.href}
    //             classNameName="flex items-center pr-5 px-1 py-4 text-xs font-medium"
    //             aria-current="step"
    //           >
    //             <span classNameName="flex h-10 w-10 flex-shrink-0  items-center justify-center rounded-full border-2   border-indigo-400">
    //               <span classNameName="text-blue-400">{step.id}</span>
    //             </span>
    //             <span classNameName="ml-4 text-xs pr-5 font-medium text-blue-500">
    //               {step.name}
    //             </span>
    //           </a>
    //         ) : (
    //           <a href={step.href} classNameName="group flex items-center">
    //             <span classNameName="flex items-center px-8 py-4 text-sm font-medium">
    //               <span classNameName="flex h-10  w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-400 group-hover:border-blue-400">
    //                 <span classNameName="text-blue-500  group-hover:text-blue-300">
    //                   {step.id}
    //                 </span>
    //               </span>

    //               <span classNameName="ml-4 text-xs px-5 font-medium text-red-500 group-hover:text-gray-900">
    //                 {step.name}
    //               </span>
    //             </span>
    //           </a>
    //         )}

    //         {stepIdx !== steps.length - 1 ? (
    //           <>
    //             {/* Arrow separator for lg screens and up */}
    //             <div
    //               classNameName="absolute  right-0 top-0 hidden h-full w-5 md:block"
    //               aria-hidden="true"
    //             >
    //               <svg
    //                 classNameName="h-4 w-4 mt-7 ml-2 text-gray-500"
    //                 viewBox="0 0 22 80"
    //                 fill="none"
    //                 preserveAspectRatio="none"
    //               >
    //                 <path
    //                   d="M0 -2L20 40L0 82"
    //                   vectorEffect="non-scaling-stroke"
    //                   stroke="currentcolor"
    //                   strokeLinejoin="round"
    //                 />
    //               </svg>
    //             </div>
    //           </>
    //         ) : null}
    //       </li>
    //     ))}
    //   </ol>
    // </nav>
    <>
      <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-blue-500 bg-blue-50 border border-blue-50 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-blue-500 dark:border-blue-50 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        <li className="flex items-center text-blue-600 dark:text-blue-500">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            1
          </span>
          Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          <span>
            <svg
              className="w-6 h-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </span>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-500 rounded-full shrink-0 dark:border-gray-400">
            2
          </span>
          Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          <span>
            <svg
              className="w-6 h-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </span>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-500 rounded-full shrink-0 dark:border-gray-400">
            3
          </span>
          Review
        </li>
      </ol>
    </>
  );
}
