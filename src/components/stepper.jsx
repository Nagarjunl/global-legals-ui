// import { CheckIcon } from "@heroicons/react/24/solid";

const steps = [
  { id: "1", name: "Personal Details", href: "#", status: "current" },
  { id: "2", name: "Payment done", href: "#", status: "upcoming" },
  { id: "3", name: "Verification", href: "#", status: "upcoming" },
];
console.log(steps);
export default function Example() {
  return (
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
