import { useState } from "react";
import { ChevronRightIcon, CheckIcon } from "@heroicons/react/20/solid";
import Application from "../pages/SignUpForms/Application";
import PrivateInvestigators from "../pages/SignUpForms/PrivateInvestigators";
import PayPremium from "../pages/PayPremium";
import Verification from "../pages/SignUpForms/Verification";
import LawyerEnterDetails from "../pages/SignUpForms/LawyerEnterDetails";
import BondBailsman from "../pages/SignUpForms/BondBailsman";

const steps = [
  { id: "1", name: "Personal Details", href: "#", status: "current" },
  { id: "2", name: "BondBailsman Details", href: "#", status: "upcoming" },
  { id: "3", name: "Security Details", href: "#", status: "upcoming" },
  { id: "4", name: "Private Investigators", href: "#", status: "upcoming" },
  { id: "5", name: "Pay Premium", href: "#", status: "upcoming" },
  { id: "6", name: "Verification", href: "#", status: "upcoming" },
];

export default function Example() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <>
      <div className="max-w-full p-2">
        <ol className="flex items-center mx-auto w-min p-3 space-x-2 text-sm font-medium text-center text-blue-500 bg-blue-50 border border-blue-50 rounded-lg dark:text-gray-400 sm:text-base dark:bg-blue-50 dark:border-blue-50 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className={`flex items-center ${
                index === currentStep
                  ? "text-blue-600 dark:text-blue-500"
                  : index < currentStep
                  ? "text-green-500"
                  : "text-gray-500 dark:text-gray-400"
              } cursor-pointer`}
              onClick={() => handleStepClick(index)}
            >
              <span
                className={`flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 ${
                  index === currentStep
                    ? "border-blue-600 dark:border-blue-500"
                    : index < currentStep
                    ? "border-green-500 bg-green-500" // Set the background color for the tick icon
                    : "border-gray-500 dark:border-gray-400"
                }`}
              >
                {index < currentStep ? (
                  <CheckIcon className="w-4 h-4 text-white" />
                ) : (
                  index + 1
                )}
              </span>
              <span className="whitespace-nowrap">{step.name}</span>
              {index !== steps.length - 1 && (
                <span>
                  <ChevronRightIcon className="w-6 h-6 mx-2 text-gray-500" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* Render the content of the current step */}
      <div className="max-w-full mx-auto p-4">
        {currentStep === 0 && (
          <div>
            <LawyerEnterDetails />
          </div>
        )}
        {currentStep === 1 && (
          <div>
            <BondBailsman />
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <Application />
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <PrivateInvestigators />
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <PayPremium />
          </div>
        )}
        {currentStep === 5 && (
          <div>
            <Verification />
          </div>
        )}
      </div>
    </>
  );
}
