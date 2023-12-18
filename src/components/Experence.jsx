export default function Experence() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
      <h3 className=" font-semibold leading-6 text-2xl mt-12 text-gray-900 sm:col-span-6">
        Business Information
      </h3>
      <div className="sm:col-span-3">
        <h5 className="mt-2">Full Legal Business Name</h5>
        <div className="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            placeholder="Enter Name"
            className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-3">
        <h5 className="mt-2">Business Address</h5>
        <div className="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            placeholder="Business Address"
            className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-3">
        <h5 className="mt-2">Business Email Address</h5>
        <div className="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            placeholder="Enter Email"
            className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-3">
        <h5 className="mt-2">Business Phone number</h5>
        <div className="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            placeholder="Enter number"
            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-3">
        <h5 className="mt-2">Company website</h5>
        <div className="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            placeholder="company website"
            className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-3">
        <h5 className="mt-2">Owner Agent Information</h5>
        <div className="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            placeholder="Agent Information"
            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
}
