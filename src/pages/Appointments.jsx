import { Link } from "react-router-dom";

function Appointments() {
  return (
    <div className="container mx-auto">
      <div className="flex py-10 flex-row justify-between gap-7">
        <p className="text-black text-2xl font-medium">Appoinments</p>
        <div className=" flex ">
          <select
            className="ml-10 block ml-4 w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2  sm:text-sm sm:leading-6"
            defaultValue="Today"
          >
            <option>Today</option>
            <option>Tomorrow</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <div className="w-full sm:w-72 bg-white rounded-lg overflow-hidden border border-gray-300">
          <div className="px-6 py-4">
            <h2 className="text-sm">Client Name</h2>
            <p className="text-gray-700 text-base mb-2">Martin Luther king</p>
            <h2 className="text-sm">Legal Matter</h2>
            <p className="text-gray-700 text-base mb-2">Corporate Law</p>{" "}
            <h2 className="text-sm">Phone number</h2>
            <p className="text-gray-700 text-base mb-2">
              +1 - 385-3499-594
            </p>{" "}
            <h2 className="text-sm">Appointment Date & Time</h2>
            <p className="text-gray-700 text-base">10’Apr 2023 / 12:00 PM </p>
            <div className="flex flex-col items-center">
              <Link className="mt-4 text-blue-500 ">Reschedule Meeting</Link>
              <button
                type="button"
                className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3"
              >
                Join via virtual meet
              </button>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-72 bg-white rounded-lg overflow-hidden border border-gray-300">
          <div className="px-6 py-4">
            <h2 className="text-sm">Client Name</h2>
            <p className="text-gray-700 text-base mb-2">Martin Luther king</p>
            <h2 className="text-sm">Legal Matter</h2>
            <p className="text-gray-700 text-base mb-2">Corporate Law</p>{" "}
            <h2 className="text-sm">Phone number</h2>
            <p className="text-gray-700 text-base mb-2">
              +1 - 385-3499-594
            </p>{" "}
            <h2 className="text-sm">Appointment Date & Time</h2>
            <p className="text-gray-700 text-base">10’Apr 2023 / 12:00 PM </p>
            <div className="flex flex-col items-center">
              <Link className="mt-4 text-blue-500 ">Reschedule Meeting</Link>
              <button
                type="button"
                className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3"
              >
                Join via virtual meet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;