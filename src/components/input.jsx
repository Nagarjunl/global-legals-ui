function input() {
  return (
    <>
      <div className=" grid  grid-cols-3 gap-4">
        <h3
          className="col-span-3
        	 font-semibold w-full h   leading-6 text-2xl  text-gray-900"
        >
          Personal Information
        </h3>

        <div>
          <div className="mt-2 ">
            <h5>Enter your full name</h5>
            <div className="mt-2">
              <input
                className="block w-full  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your full name"
              />
            </div>
          </div>
          <div className="mt-2">
            <h5>Contact number</h5>
            <div className="mt-2">
              <input
                className="block w-full p-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your Contact number"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-2">
            <h5>Enter Email Address</h5>
            <div className="mt-2">
              <input
                className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter Email Address"
              />
            </div>
          </div>
          <div className="mt-2">
            <h5>Location / Address</h5>
            <div className="mt-2">
              <input
                className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your location "
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-7 flex justify-center rounded-lg border border-dashed border-gray-900/25  ">
            <div className="text-center mb-2 ">
              <div className="mt-4 flex text-sm leading-6 text-gray-900 ">
                <span className="ml-6 mb-2">
                  Upload your
                  <br /> current photo
                </span>
              </div>
              <button
                type="button"
                className="rounded-md bg-white px-3.5  py-2.5 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid border-blue-500"
              >
                Browse & upload
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h5>Write a professional Bio</h5>
        <div className="mt-2">
          <textarea
            rows={4}
            name="comment"
            id="comment"
            className="block w-full  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
            placeholder="Write a professional Bio"
          />
        </div>
      </div>
    </>
  );
}

export default input;
