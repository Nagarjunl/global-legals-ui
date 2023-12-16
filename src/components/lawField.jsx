function lawField() {
  return (
    <div>
      <div className=" grid grid-cols-1 gap-x-6  sm:grid-cols-6">
        <h3 className=" font-semibold leading-6 text-2xl mt-12 text-gray-900 sm:col-span-6">
          Licensing Credentials
        </h3>
        <div className="sm:col-span-3">
          <h5 className="mt-2">License Number</h5>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Enter number"
              autoComplete="given-name"
              className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <h5 className="mt-2">Date of Licensing</h5>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              placeholder="Enter date"
              className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <h5 className="mt-2">Licensing Authority</h5>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              placeholder="Licensing Authority"
              className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <h5 className="mt-2">Bonding Capacity</h5>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Bonding capacity"
              autoComplete="given-name"
              className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default lawField;
