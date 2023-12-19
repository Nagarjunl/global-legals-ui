// import { CheckCircleIcon } from "@heroicons/react/20/solid";
import LawyerCard from "../components/LawyerCard";
import Frame from "../assets/Frame 20.png";
import cupImage from "../assets/image 25.svg";



import Layer from "../assets/Layer.svg";
const data = [
  {
    name: "Probate and estate administration",
  },
  {
    name: "Business and commercial law",
  },
  {
    name: "Criminal defense",
  },
  {
    name: "Drug Violations",
  },
  {
    name: "Estate Planning",
  },
  {
    name: "Bankruptcy",
  },
];

const ProfessionalDetails = () => {
  return (
    < >
    <div className="container mx-auto">
      <div className="mx-auto flex justify-center ">
    <LawyerCard
      image={Frame}
      fName="Bill Thompson Moreira "
      Cups={cupImage}
      topRated="Top Rated  Attorney"
      selfIntro="Myseld Bill thompson, served as a trusted adviser, valued legal representative and respected legal counsel..."
      pratcingAt="Densborn Blachly LLP"
      designation="Indiana USA Labor and Employment Attorney"
    />
  </div>
      <div className="container mx-auto">
        <h2 className="text-2xl font-medium">
          Indiana USA Labor and Employment Attorney
        </h2>
        <p className="text-base pt-2 font-light">
          From our law office in Knoxville, Tennessee, attorney Seth oakes,
          founder and owner of the Oakes Law Firm, provides outstanding
          representation and support to a diverse range of cilents across our
          region who have legal needs involves
        </p>
        <div className="max-w-screen-sm pt-2">
          {data.map((badges, index) => (
            <span
              className="inline-flex justify-between items-center rounded-full bg-blue-500 bg-opacity-20 px-6 py-1 text-xs font-medium text-blue-500 ring-1 ring-inset ring-gray-500/10 ml-2 mb-2"
              key={index}
            >
              {badges.name}
            </span>
          ))}
        </div>
        <p className="text-base pt-2 font-light">
          The Underwood Law Office, P.C., in Knoxville, Tennessee, is a law firm
          that emphasizes protecting clients and providing them justice when
          faced with a strenuous ordeal that arises in the workplace. The firm
          is also knowledgeable in handling issues related to estate planning
          and administration, probate, wills and trusts and civil rights. When
          it comes to complex issues pertaining to labor and employment law,
          employee wage and hour laws, workers' compensation or wrongful
          termination, the firm stands steadfast and committed to its clients
          and offers them a variety of avenues to dictate efficacy in their
          case. The legal team at the firm is acutely aware of the many
          stressors that one may face when confronted with unethical employment
          practices that has the potential to impact their livelihood for the
          worse. The firm takes steps to ensure their clients know their legal
          team inside and out and allows them to carry the burden of their legal
          problems to the conclusion of their case.The firm's founder, George T.
          Underwood Jr., has over 30 years of experience in the legal field and
          has been recognized by many prominent legal organizations for his
          tireless advocacy.
        </p>
        <p className="text-base pt-2 font-light">
          Licensed to practice in Tennessee since 2013, attorney Oakes has
          nearly 10 years of total legal experience
        </p>
        <h2 className="text-xl pt-2 font-medium">Articles Published</h2>
        <p className="text-base pt-2 font-light">
          Perspectives on capital Punishment in America, Create Space, 2013
          Searching Inquiry into the contours of capital punishment in America.
          contribution features federal habeas corpus protections for
          state-sentenced capital offenders and the constitutionally of limits
          on “actual innocence” equitable tolling
        </p>
        <h2 className="text-xl pt-2 font-medium">Cases Representated</h2>
        <ul className="text-black-500 list-disc list-inside mt-3 text-base md:text-base lg:text-lg max-w-screen-md text-blue-500">
          <li>
            RALPH JUNIOR LOWEV . Roy Province et al, 2021 Tenn., App Lexis 400 (
            Reg No 3204249.210)
          </li>
          <li>WATSON .V 2023 Tenn., App Lexis 170 ( Reg No 38948340)</li>
        </ul>
        <div className="flex justify-center items-start pt-4">
          <img src={Layer} alt="Your Image" className="block mx-auto" />
        </div>
        <h2 className="text-center pt-2 text-2xl">
          Schedule a Meeting with us
        </h2>
        <p className="text-center pt-2 text-sm font-light">
          We're here to assist you. If you have legal concerns or need
          professional advice, feel free to schedule a meeting with one of our
          experienced lawyers
        </p>
        <div className="flex items-center justify-center mt-4 gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 border border-indigo-600 shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Schedule with Google Meet
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 border border-indigo-600 shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Schedule with Zoom
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 border border-indigo-600 shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Schedule with Skype
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="p-6">
            <h2 className="text-lg font-medium">Law Firm Address</h2>
            <h2 className="text-base font-light">
              10412 Kinston pike Suite 201 <br />
              Knoxville, TN 37922
            </h2>
            <h2 className="text-blue-600 text-base pt-2">Get Directions</h2>
            <h2 className="text-lg font-medium pt-2">Payment method</h2>
            <h2 className="text-base font-light">
              Online Payment, Accepts credit cards
            </h2>
            <h2 className="text-lg font-medium pt-2">Office Hours</h2>
            <h2 className="text-base font-light">
              Mon - Fri : 9:00 am - 4:00 pm
            </h2>
          </div>
          <div className="p-6">
            <h2 className="font-medium">Contact Form</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="input1"
                  className="block text-sm font-normal text-gray-700"
                >
                  Enter your full name{" "}
                </label>
                <input
                  type="text"
                  id="input1"
                  name="input1"
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="input2"
                  className="block text-sm font-normal text-gray-700"
                >
                  Enter Email Address{" "}
                </label>
                <input
                  type="text"
                  id="input2"
                  name="input2"
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
              <div>
                <label
                  htmlFor="input1"
                  className="block text-sm font-normal text-gray-700"
                >
                  Contact number{" "}
                </label>
                <input
                  type="text"
                  id="input1"
                  name="input1"
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="input2"
                  className="block text-sm font-normal text-gray-700"
                >
                  Location / Zipcode{" "}
                </label>
                <input
                  type="text"
                  id="input2"
                  name="input2"
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
            </div>
            <div className="grid mt-3 w-full">
              <label
                htmlFor="textarea"
                className="block text-sm font-normal text-gray-700 mb-2"
              >
                Tell us more about your legal need{" "}
              </label>
              <textarea
                id="textarea"
                name="textarea"
                rows="4"
                className="w-full p-2 border rounded-md"
              ></textarea>
            </div>
            <div className="flex items-center pt-3">
              <input
                type="checkbox"
                id="acceptTerms"
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label
                htmlFor="acceptTerms"
                className="ml-2 block text-sm text-gray-900 font-normal"
              >
                Send me a copy of this mail{" "}
              </label>
            </div>
            <div className="grid mt-3 w-full font-light">
              The information contained on this website is intended to convey
              general information. It should not be construed as legal advice or
              opinion. It is not an offer to represent you, nor is it intended
              to create an attorney-client relationship. The use of the internet
              or this contact form for communication is not necessarily a secure
              environment. Contacting a lawyer or law firm via email through
              this service will not create an attorney-client relationship, and
              information will not necessarily be treated as privileged or
              confidential.
            </div>
            <div className="flex justify-between mt-4 ">
              <button className="bg-blue-500 text-white px-4 py-2 w-72 rounded-md">
                Send Mail{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default ProfessionalDetails;
