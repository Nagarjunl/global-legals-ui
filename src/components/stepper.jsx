import { ChevronRightIcon } from "@heroicons/react/20/solid";
const steps = [
  { id: "1", name: "Personal Details", href: "#", status: "current" },
  { id: "2", name: "Payment done", href: "#", status: "upcoming" },
  { id: "3", name: "Verification", href: "#", status: "upcoming" },
];
console.log(steps);
export default function Example() {
  return (
    <>
      <div className="max-w-screen-md mx-auto p-4">
        <ol className="flex items-center mx-auto w-min p-3 space-x-2 text-sm font-medium text-center text-blue-500 bg-blue-50 border border-blue-50 rounded-lg  dark:text-gray-400 sm:text-base dark:bg-blue-50 dark:border-blue-50 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
          <li className="flex items-center text-blue-600 dark:text-blue-500">
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
              1
            </span>
            Personal{" "}
            <span className="sm:block inline-flex sm:ms-2">Details</span>
            <span>
              <ChevronRightIcon className="w-6 h-6 mx-2 text-gray-500" />
            </span>
          </li>
          <li className="flex items-center text-blue-600 dark:text-blue-500">
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-500 rounded-full shrink-0 dark:border-gray-400">
              2
            </span>
            payment <span className="sm:block inline-flex sm:ms-2">done</span>
            <span>
              <ChevronRightIcon className="w-6 h-6 mx-2 text-gray-500" />
            </span>
          </li>
          <li className="flex items-center text-blue-600 dark:text-blue-500">
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-500 rounded-full shrink-0 dark:border-gray-400">
              3
            </span>
            <span className="sm:block inline-flex sm:ms-2">Verification</span>
          </li>
        </ol>
      </div>
    </>
  );
}
