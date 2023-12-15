<div className="max-w-screen min-h-screen ">
  <div className="bg-green-900 pl-[84px] pr-[131px] pt-[54px]">
    <div className="  flex flex-col items-stretch  md:max-w-full">
      <div className="flex justify-between items-stretch flex-wrap w-full gap-5 mt-1 md:pr-5">
        <div className="items-center  flex justify-between gap-2">
          <button className="flex">
            <img
              alt="image"
              src={Globe}
              className="aspect-[0.98] object-contain object-center w-10 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <p className="text-white text-xl italic font-bold self-stretch">
              Global <br />
              Legals
            </p>
          </button>
        </div>
        <div className="self-center flex items-stretch justify-between gap-5 my-auto md:justify-center">
          <div className="text-white text-base font-[450] self-start">
            <button> Home</button>
          </div>
          <div className="text-white text-base font-[450] self-start">
            <button>Business Signup</button>
          </div>
          <div className="text-white text-base font-[450] self-start">
            <button>FAQ</button>
          </div>
        </div>
      </div>

      <div className=" md:mt-36">
        <div className="flex flex-col   items-stretch w-full md:flex-row md:ml-0">
          <div className="flex flex-col items-stretch w-full md:w-1/2 md:ml-0 ">
            <p className="text-white text-5xl font-bold">
              Effortlessly Locate the Ideal{" "}
            </p>
            <p className="text-white text-5xl italic font-light">
              Professional Services
            </p>
            <div className="flex items-stretch justify-between gap-0 mt-6 md:flex-wrap">
              <input
                className="text-zinc-600 text-sm font-[450] whitespace-nowrap bg-white grow justify-center pl-3 pr-4 md:pr-5 py-3 items-start w-full md:w-auto"
                placeholder="  Search for any service in your county"
              />
              <button class="items-center bg-emerald-500 flex aspect-[1.5952380952380953] flex-col justify-center px-6 py-2.5 md:pr-5">
                <IoSearchOutline color="white" size={30} />
              </button>
            </div>
            <div className="flex  flex-wrap mt-3 ">
              <p className="inline-flex text-white text-sm font-[450] whitespace-nowrap justify-center items-stretch border grow px-5 py-1 rounded-[100px] border-solid border-white">
                Lawyers
              </p>
              <p className=" inline-flex text-white text-sm font-[450] whitespace-nowrap justify-center items-stretch border grow px-5 py-1 rounded-[100px] border-solid border-white">
                Private Investigators
              </p>
              <p className="inline-flex text-white text-sm font-[450] whitespace-nowrap justify-center items-stretch border grow px-5 py-1 rounded-[100px] border-solid border-white">
                Bail Bondsman
              </p>
              <p className="inline-flex text-white text-sm font-[450] whitespace-nowrap justify-center  border grow px-5 py-1 rounded-[100px] border-solid border-white">
                Security
              </p>
            </div>
          </div>
          <div
            className="relative items-stretch w-full md:w-1/2  md:flex
          bottom-0 ml-0 md:ml-5"
          >
            <img
              alt="image"
              src={RemovalImg}
              className=" object-contain object-center w-full overflow-hidden  grow mt-20 md:mt-12"
            />

            <span className="absolute px-[18px] py-[2px]  text-white bottom-[79%] left-[57%] transform -translate-x-1/2 bg-white bg-opacity-20 border border-solid border-white border-opacity-10 rounded-full backdrop-blur-2">
              Security
            </span>
            <span className="absolute px-[8px] py-[2px] text-white bottom-[8%] right-[89%] bg-white bg-opacity-20 border border-solid border-white border-opacity-10 rounded-full backdrop-blur-2">
              Lawyers
            </span>
            <span className="absolute px-[8px] py-[2px] text-white bottom-[6%] right-[22%] bg-white bg-opacity-20 border border-solid border-white border-opacity-10 rounded-full backdrop-blur-2">
              Private Investigators
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="justify-between  bg-white flex flex-col px-20 py-12 max-md:px-5">
    <p className="text-black  flex text-5xl font-bold whitespace-nowrap mt-16 max-md:max-w-full max-md:mt-10">
      Services we Offer
    </p>
    <div className="w-full max-w-[1200px] mt-10 mb-12 max-md:max-w-full max-md:mb-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col justify-center items-stretch w-full max-md:mt-5">
            <div className="flex-col overflow-hidden relative flex aspect-[0.8636363636363636] w-full items-stretch pt-12 pb-4 px-4">
              <img
                alt="image"
                src={CardOne}
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative items-stretch backdrop-blur-[20px] bg-white flex flex-col mt-40 px-5 py-4 rounded-[100px] max-md:mt-[350px]">
                <p className="text-black text-center text-base font-[450] whitespace-nowrap">
                  Your Advocate Professionals
                </p>
                <p className="text-black text-center text-xl font-bold whitespace-nowrap">
                  Legal Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col justify-center items-stretch w-full max-md:mt-5">
            <div className="flex-col overflow-hidden relative flex aspect-[0.8636363636363636] w-full items-stretch pt-12 pb-4 px-4">
              <img
                alt="image"
                src={CardTwo}
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative items-stretch backdrop-blur-[20px] bg-white flex flex-col mt-[150px] px-5 py-4 rounded-[100px] max-md:mt-[350px]">
                <p className="text-black text-center text-base font-[450] whitespace-nowrap">
                  Sleath uncover
                </p>
                <p className="text-black text-center text-xl font-bold whitespace-nowrap">
                  Truth, Find clues
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col justify-center items-stretch w-full max-md:mt-5">
            <div className="flex-col overflow-hidden relative flex aspect-[0.8636363636363636] w-full items-stretch pt-12 pb-4 px-4">
              <img
                alt="image"
                src={CardThree}
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative items-stretch backdrop-blur-[20px] bg-white flex flex-col mt-[150px] px-5 py-4 rounded-[100px] max-md:mt-[350px]">
                <p className="text-black text-center text-base font-[450] whitespace-nowrap">
                  Freedom bonded, Swift
                </p>
                <p className="text-black text-center text-xl font-bold whitespace-nowrap">
                  Release, Trusted
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col justify-center items-stretch w-full max-md:mt-5">
            <div className="flex-col overflow-hidden relative flex aspect-[0.8636363636363636] w-full items-stretch pt-12 pb-4 px-4">
              <img
                src={CardFour}
                alt="image"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative items-stretch backdrop-blur-[20px] bg-white flex flex-col mt-[150px] px-5 py-4 rounded-[100px] max-md:mt-[350px]">
                <p className="text-black text-center text-base font-[450] whitespace-nowrap">
                  Protection, Peace of
                </p>
                <p className="text-black text-center text-xl font-bold whitespace-nowrap">
                  Mind, Safety
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*  */}
  <div className="justify-center items-center bg-lime-50 flex flex-col px-16 py-12 max-md:px-5 ">
    <div className="w-full max-w-[1200px] mt-16 mb-12 max-md:max-w-full max-md:my-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <div className="justify-end items-start flex grow flex-col max-md:max-w-full max-md:mt-10 ">
            <p className="self-stretch text-black text-5xl font-bold max-md:max-w-full">
              The best part? Everything.
            </p>
            <div className="self-stretch flex justify-between gap-2 mt-10 items-start max-md:max-w-full max-md:flex-wrap">
              <FaRegCheckCircle className="h-[28px]  text-zinc-600 aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full" />
              <p className="text-black text-2xl font-bold self-stretch grow shrink basis-auto max-md:max-w-full">
                Connect with Skilled Professionals
              </p>
            </div>
            <p className="self-stretch text-zinc-600 text-xl font-[450] mt-2 max-md:max-w-full">
              Discover an array of professional services at your fingertips.
            </p>
            <div className="flex gap-2 mt-10 self-start items-start">
              <FaRegCheckCircle className="h-[28px]  text-zinc-600 aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full" />
              <p className="text-black text-2xl font-bold self-stretch grow whitespace-nowrap">
                You Trusted Resource
              </p>
            </div>
            <p className="self-stretch text-zinc-600 text-xl font-[450] mt-2 max-md:max-w-full">
              Whether you need legal advice, investigative services, bail bonds
              assistance, or security solutions, we've got you covered
            </p>
            <div className="flex gap-2 mt-10 self-start items-start">
              <FaRegCheckCircle className="h-[28px]  text-zinc-600 aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full" />{" "}
              <p className="text-black text-2xl font-bold self-stretch grow whitespace-nowrap">
                Tailored Expertise
              </p>
            </div>
            <p className="self-stretch text-zinc-600 text-xl font-[450] mt-2 max-md:max-w-full">
              Find professionals with the specific talents and skills to address
              your unique needs.
            </p>
            <div className="self-stretch flex justify-between gap-2 mt-10 items-start max-md:max-w-full max-md:flex-wrap">
              <FaRegCheckCircle className="h-[28px]  text-zinc-600 aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full" />
              <p className="text-black text-2xl font-bold self-stretch grow shrink basis-auto max-md:max-w-full">
                Swift and Secure Assistance
              </p>
            </div>
            <p className="self-stretch text-zinc-600 text-xl font-[450] mt-2 max-md:max-w-full">
              Get prompt and reliable assistance from experienced experts in
              their respective fields.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="  flex grow flex-col justify-center items-stretch w-full mt-32 max-md:max-w-full max-md:mt-10">
            <div className="flex-col overflow-hidden relative flex min-h-[529px] w-full items-center pl-14 pr-20 py-12 max-md:max-w-full max-md:px-5">
              <img
                alt="image"
                src={containerThree}
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative text-white text-xl font-medium leading-6 justify-center items-stretch border backdrop-blur-[2px] bg-white bg-opacity-30 px-5 py-2 rounded-[100px] border-solid border-white border-opacity-10 self-start">
                Services we bring to table
              </div>
              <p className="relative text-white text-xl font-medium leading-6 whitespace-nowrap justify-center items-stretch border backdrop-blur-[2px] bg-white bg-opacity-40 mt-4 px-5 py-2 rounded-[100px] border-solid border-white border-opacity-10">
                At Affordable prices
              </p>
              <p className="relative text-white text-xl font-medium leading-6 justify-center items-stretch border backdrop-blur-[2px] bg-white bg-opacity-30 mt-4 mb-52 px-5 py-2 rounded-[100px] border-solid border-white border-opacity-10 self-start max-md:mb-10">
                We Offer much more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*  */}
  <div className="items-center flex flex-col justify-center px-16 py-12 max-md:px-5">
    <div className="flex w-full max-w-[1200px] flex-col items-stretch mt-16 mb-12 max-md:max-w-full max-md:my-10">
      <p className="text-black text-5xl font-bold max-md:max-w-full">
        Your Roadmap to Achieving Growth
      </p>
      <div className="mt-10 max-md:max-w-full">
        <div className="gap-5 flex  max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-wrap flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="self-stret flex-wrap flex grow flex-col justify-center items-stretch w-full max-md:max-w-full max-md:mt-10">
              <div className="flex-col flex-wrap  overflow-hidden relative flex min-h-[529px] w-full items-stretch pt-12 pb-7 px-9 max-md:max-w-full max-md:px-5">
                <img
                  src={image1}
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className="relative  items-stretch bg-white flex flex-wrap flex-col justify-center mt-96 px-8 py-5 rounded-[100px] max-md:max-w-full max-md:mt-10 max-md:px-5">
                  <div className="inline-flex items-center flex-wrap rounded-ful text-xs font-medium text-gray-600  ">
                    <div className="items-stretch flex-wrap flex-shrink flex grow basis-[0%] flex-col">
                      <p className="text-black text-2xl font-bold whitespace-wrap">
                        Explore the legal Labyrinth
                      </p>
                      <p className="text-zinc-600 text-lg font-[450] whitespace-nowrap mt-1">
                        Finding the Right Lawyer for your Needs
                      </p>
                    </div>
                    <FaCircleArrowRight className="text-black aspect-square object-contain object-center w-[40px] h-[40px] overflow-hidden self-center shrink-0 max-w-full my-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="self-stret flex-wrap flex grow flex-col justify-center items-stretch w-full max-md:max-w-full max-md:mt-10">
              <div className="flex-col flex-wrap  overflow-hidden relative flex min-h-[529px] w-full items-stretch pt-12 pb-7 px-9 max-md:max-w-full max-md:px-5">
                <img
                  src={image2}
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className="relative  items-stretch bg-white flex flex-wrap flex-col justify-center mt-96 px-8 py-5 rounded-[100px] max-md:max-w-full max-md:mt-10 max-md:px-5">
                  <div className=" inline-flex items-center rounded-full flex-wrap text-xs font-medium text-gray-600  ">
                    <div className="items-stretch flex-wrap flex-shrink flex grow basis-[0%] flex-col">
                      <p className="text-black text-2xl font-bold whitespace-wrap">
                        From Incarceration to Liberation
                      </p>
                      <p className="text-zinc-600 text-lg font-[450] whitespace-nowrap mt-1">
                        How Bail Bonds Make Freedom Possible
                      </p>
                    </div>
                    <FaCircleArrowRight className="text-black aspect-square object-contain object-center w-[40px] h-[40px] overflow-hidden self-center shrink-0 max-w-full my-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*  */}
    <div className="justify-center items-center bg-white flex flex-col px-16 py-12 max-md:px-5">
      <div className="w-full max-w-[1200px] mt-24 mb-16 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto max-md:mt-10">
              <p className="text-black text-5xl font-semibold">
                Get in Touch with Global Legals
              </p>
              <p className="text-stone-900 text-xs mt-1">
                Have questions, need assistance, or looking for legal guidance?
                Fill out the form below, and our team will get back to you
                promptly. Your inquiries matter to us!
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-wrap   items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch bg-blue-500 bg-opacity-10 flex grow flex-wrap  flex-col w-full px-20 py-12 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="items-stretch flex-wrap  flex justify-between gap-3 mt-8 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-black text-xs">Full Name</div>
                  <input
                    className="text-gray-500 text-sm whitespace-nowrap border bg-white justify-center mt-2 pl-3 pr-16 py-3 rounded-lg border-solid border-slate-200 items-start max-md:pr-5"
                    placeholder="Ente your name"
                  />
                </div>
                <div className="items-stretchflex-wrap  flex grow basis-[0%] flex-col">
                  <p className="text-black text-xs">Email Address</p>
                  <input
                    className="text-gray-500 text-sm whitespace-nowrap border bg-white justify-center mt-2 pl-3 pr-16 py-3 rounded-lg border-solid border-slate-200 items-start max-md:pr-5"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="items-stretch flex flex-wrap  justify-between gap-3 mt-3 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-black text-xs">Phone Number </div>
                  <input
                    className="text-gray-500 text-sm whitespace-nowrap border bg-white justify-center mt-2 pl-10 pr-16 py-3 rounded-lg border-solid border-slate-200 items-start max-md:pr-5"
                    placeHolder="Enter Contact number"
                  />
                </div>
                <div
                  // className="items-stretch flex grow basis-[0%] flex-col"
                  className="items-stretch flex-grow flex flex-col mt-0 mb-4
                  max-md:mt-0"
                >
                  <p className="text-black text-xs">Preferred Contact method</p>
                  <Dropdown className="text-gray-500 text-sm whitespace-nowrap border bg-white justify-center mt-2 pl-3 pr-16 py-3 rounded-lg border-solid border-slate-200 items-start max-md:pr-8" />
                </div>
              </div>
              <p className="text-black text-xs mt-3 max-md:max-w-full">
                Inquiry details
              </p>
              <TextArea
                className="text-gray-500 text-sm whitespace-nowrap border bg-white mt-2 pl-3 pr-16 pt-3 pb-28 rounded-lg border-solid border-slate-200 items-start max-md:max-w-full max-md:pr-5 max-md:pb-10"
                placeholder="  Write a short enquiry details"
              />
              <div className="justify-between flex-wrap items-stretch flex gap-5 mt-3 mb-8 max-md:max-w-full max-md:flex-wrap">
                <img
                  alt="image"
                  src={Captacha}
                  className="aspect-[2.89] object-contain object-center w-44 overflow-hidden shrink-0 max-w-full"
                />
                <button className="text-white text-sm whitespace-nowrap justify-center items-center bg-blue-600 self-center my-auto px-16 py-3 rounded-lg max-md:px-5">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="px-[120px] py-[80px]">
    <div className=" w-[100%] mt-20 mb-20 flex justify-between bg-[#FF9C70] relative text-center  sm:text-left ">
      <div className="pl-12 pt-10  ">
        <p className="text-black font-circular-std text-base md:text-lg lg:text-xl font-extrabold italic p-3">
          Global Legals
        </p>
        <p className="text-white font-circular-std text-xl md:text-2xl lg:text-3xl font-bold p-3">
          Discover the Perfect Professionals
        </p>
        <p className="text-white font-circular-std text-sm md:text-base lg:text-lg font-medium p-3">
          Your Expertise, Our Network, Perfect Match
        </p>
        <button className="bg-black m-3 p-3 md:p-3 lg:p-3 items-center gap-2 ">
          <p className="text-white font-circular-std text-sm md:text-base lg:text-lg font-medium">
            Explore Services
          </p>
        </button>
      </div>
      <div className="absolute bottom-0 right-5 hidden sm:block">
        <img src={BanerPerson} className=" sm:w-60 md:w-60 lg:w-64 z-10" />
      </div>
    </div>
  </div>

  {/*  */}
  <div className="items-stretch bg-white flex flex-col pt-12 pb-6">
    <div className="justify-center items-center border-b-[color:var(--Border,#D5E3EF)] flex w-full flex-col mt-8 px-16 py-6 border-b border-solid max-md:max-w-full max-md:px-5">
      <div className="w-full max-w-[1200px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
            <div className=" gap-2 justify-end items-stretch flex flex-col max-md:mt-10">
              <p className="text-slate-600 text-lg font-bold leading-7">
                Exclusive Offers For You
              </p>
              <p className="text-slate-600 text-xs leading-5 whitespace-nowrap mt-2">
                Get the latest updates & offers in your inbox
              </p>

              <form>
                <div>
                  <div class="relative">
                    <input
                      type="search"
                      id="search"
                      class="block w-full rounded-full p-4 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Your Email Address"
                      required
                    />
                    <button
                      type="submit"
                      class="offers_btn text-white absolute  end-2.5 bottom-2.5 bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 h-9 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col max-md:mt-10">
              <p className="text-black text-lg font-bold">Community</p>
              <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                Customer Success Stories
              </p>
              <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                Community Hub
              </p>
              <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                Forum
              </p>
              <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                Events
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col max-md:mt-10">
              <p className="text-black text-lg font-bold whitespace-nowrap">
                Business
              </p>
              <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                About us
              </p>
              <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                Global Certified
              </p>
              <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                Global Enterprises
              </p>
              <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                Contact Sales
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-10">
              <p className="text-black text-lg font-bold whitespace-nowrap">
                About
              </p>
              <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                Careers
              </p>
              <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                Press & News
              </p>
              <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                Partnership
              </p>
              <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                Privacy Policy
              </p>
              <p className="text-zinc-600 text-sm font-[450] whitespace-nowrap mt-2">
                Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="items-center  flex justify-between gap-5 mt-6 px-[80px] py-[24px] max-md:max-w-full max-md:flex-wrap">
      <p className="text-slate-600 text-xs font-bold leading-5 grow whitespace-nowrap my-auto max-md:max-w-full">
        © 2023 Global Legals
      </p>
      <div className="items-stretch self-stretch flex justify-between gap-5 max-md:justify-center">
        <FaInstagram className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
        <FaFacebook className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
        <FaYoutube className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
        <FaTwitter className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
        <FaPinterest className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full  " />
        <FaLinkedinIn className="text-zinc-600 aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full" />
      </div>
    </div>
  </div>
</div>;
