import { useState } from "react";
import LawyerEnterDetails from "./LawyerEnterDetails";
import BondBailsman from "./BondBailsman";
import SecurityDetails from "./SecurityDetails";
import PrivateInvestigators from "./PrivateInvestigators";
const SelectForm = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelectChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const renderCountryData = () => {
    switch (selectedCountry) {
      case "Lawyers":
        return <LawyerEnterDetails />;
      case "BondBailsman":
        return <BondBailsman />;
      case "Security":
        return <SecurityDetails />;
      case "Private":
        return <PrivateInvestigators />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container mx-auto sm:px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="sm:w-2/3">
            <div>
              <h3 className="font-medium leading-[34.32px] text-[24px]">
                Select your profession
              </h3>
              <p className="mt-2 text-[14px]">
                Choose your profession from the options below to tailor the form
                to your specific needs. Let&apos;s ensure we <br />
                provide you with the best experience on Globallegals
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 ">
            <div className="text-right pt-4">
              <select
                id="location"
                name="location"
                className="w-full sm:w-52 mt-8 rounded-md border-0 py-3  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue=""
                onChange={handleSelectChange}
              >
                <option value="" disabled hidden>
                  Select from dropdown
                </option>

                <option>Lawyers</option>
                <option>BondBailsman</option>
                <option>Security</option>
                <option>Private</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {selectedCountry && <div className="mt-2">{renderCountryData()}</div>}
    </>
  );
};

export default SelectForm;