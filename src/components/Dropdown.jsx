export default function Dropdown() {
  return (
    <div className="mt-3 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
      <h3 className=" font-semibold leading-6 text-2xl mt-8  text-gray-900 sm:col-span-6">
        Professional details
      </h3>
      <div className="sm:col-span-3 mt-7">
        <h5 className="mt-2">Name of practicing law firm</h5>
        <div className="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            placeholder="Enter Name"
            className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-3 mt-7">
        <h5 className="mt-2">Legal Specialization</h5>

        <div className="mt-2">
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
          >
            <option value="" disabled selected hidden>
              Select from dropdown
            </option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </div>
      <div className="sm:col-span-3 ">
        <h5 className="mt-2">Years of Experience</h5>

        <div className="mt-2">
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
          >
            <option value="" disabled selected hidden>
              Select from dropdown
            </option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>

      <div className="sm:col-span-3 ">
        <h5 className="mt-2">Bar Association License Number</h5>
        <div className="mt-2">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            placeholder="License Number"
            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-3">
        <h5 className="mt-2">Areas Served till now</h5>

        <div className="mt-2">
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
          >
            <option value="" disabled selected hidden>
              Select from dropdown
            </option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </div>
      <div className="sm:col-span-3">
        <h5 className="mt-2">Law Field Specialized in</h5>

        <div className="mt-2">
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
          >
            <option value="" disabled selected hidden>
              Select from dropdown
            </option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </div>
      <div className="sm:col-span-3">
        <h5 className="mt-2">Languages Spoken</h5>

        <div className="mt-2">
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
          >
            <option value="" disabled selected hidden>
              Select from dropdown
            </option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </div>
    </div>
  );
}
