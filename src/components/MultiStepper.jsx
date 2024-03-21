import { useState } from "react";
import { ChevronRightIcon, CheckIcon } from "@heroicons/react/20/solid";
import PayPremium from "../pages/SignUpForms/PayPremium";
import Verification from "../pages/SignUpForms/Verification";
import SelectForm from "../pages/SignUpForms/Forms";
import { useSelector } from 'react-redux'
import StripeSubscription from "../pages/Subscription/StripeSubscription";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
// const stripePromise = await loadStripe('pk_test_51OWvGSSDcWKAz6oIiMvnjQToKrOu7Pp4aHIKugWHpMTx4K19CajJQDPkx9RnQutL2QxS7cTPIL2yPfRrDefNZig600U6nDGFWZ');

const initStripe = async () => {
  return await loadStripe('pk_test_51OWvGSSDcWKAz6oIiMvnjQToKrOu7Pp4aHIKugWHpMTx4K19CajJQDPkx9RnQutL2QxS7cTPIL2yPfRrDefNZig600U6nDGFWZ');
};

const steps = [
  { id: "1", name: "Personal Details", href: "#", status: "current" },
  { id: "2", name: "Pay Premium", href: "#", status: "upcoming" },
  { id: "3", name: "Subscription", href: "#", status: "upcoming" },
  { id: "4", name: "Verification", href: "#", status: "upcoming" },
];

export default function MultiStepper() {
  const stripePromise = initStripe();

  const [currentStep, setCurrentStep] = useState(0);
  const formSubmited = useSelector((state) => state.formType.formSubmit);
  // const quota = useSelector((state) => state.user.current_user.quota);

  const handleStepClick = (index) => {
    // if (quota || formSubmited === true)
    if (!formSubmited)
      setCurrentStep(index);
  };



  return (
    <>
      <div className="max-w-full p-2">
        <ol className="flex items-center mx-auto w-min p-3 space-x-2 text-sm font-medium text-center text-blue-500 bg-blue-50 border border-blue-50 rounded-lg dark:text-gray-400 sm:text-base dark:bg-blue-50 dark:border-blue-50 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className={`flex items-center ${index === currentStep
                ? "text-blue-600 dark:text-blue-500"
                : index < currentStep
                  ? "text-green-500"
                  : "text-gray-500 dark:text-gray-400"
                } cursor-pointer`}
              onClick={() => handleStepClick(index)}
            >
              <button
                className={`flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 ${index === currentStep
                  ? "border-blue-600 dark:border-blue-500"
                  : index < currentStep
                    ? "border-green-500 bg-green-500"
                    : "border-gray-500 dark:border-gray-400"
                  }`}
              >
                {index < currentStep ? (
                  <CheckIcon className="w-4 h-4 text-white" />
                ) : (
                  index + 1
                )}
              </button>
              {/* Render the step name only on larger screens */}
              <button className="whitespace-nowrap hidden sm:inline">
                {step.name}
              </button>
              {index !== steps.length - 1 && (
                <button>
                  <ChevronRightIcon className="w-6 h-6 mx-2 text-gray-500" />
                </button>
              )}
            </li>
          ))}
        </ol>
      </div>
      {/* Render the content of the current step */}
      <div className="max-w-full mx-auto p-4">
        {currentStep === 0 && (
          <div>
            <SelectForm handleStepClick={handleStepClick} />
          </div>
        )}
        {currentStep === 1 && (
          <div>
            <PayPremium handleStepClick={handleStepClick} />
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <Elements stripe={stripePromise}>
              <StripeSubscription handleStepClick={handleStepClick} fromDashboard={false} />
            </Elements>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <Verification />
          </div>
        )}
      </div>
    </>
  );
}
