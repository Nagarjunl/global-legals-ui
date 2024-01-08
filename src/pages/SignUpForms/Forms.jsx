import LawyerEnterDetails from "./LawyerEnterDetails";
import BondBailsman from "./BondBailsman";
import SecurityDetails from "./SecurityDetails";
import PrivateInvestigators from "./PrivateInvestigators";
import { useSelector, useDispatch } from 'react-redux';
import { formType, formData } from "../../reducers/formTypeSlice";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const SelectForm = ({ handleStepClick }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentFormValue = useSelector((state) => state.formType.formType);
  const quota = useSelector((state) => state.user.quota);
  const verify = useSelector((state) => state.user.verify);

  const {
    control
  } = useForm({
  });

  const handleSelectChange = (event) => {
    dispatch(formType(event.target.value));
    dispatch(formData(""));
    renderComponent();
  };

  const renderComponent = () => {
    switch (currentFormValue) {
      case "Lawyers":
        return <LawyerEnterDetails handleStepClick={handleStepClick} />;
      case "BondBailsman":
        return <BondBailsman handleStepClick={handleStepClick} />;
      case "Security":
        return <SecurityDetails handleStepClick={handleStepClick} />;
      case "PrivateInvestigators":
        return <PrivateInvestigators handleStepClick={handleStepClick} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (quota === true && verify === true) {
      navigate('/dashboard/appointments')
    } else if (quota === true) {
      navigate('/dashboard/verification')
    } else {
      navigate('/dashboard')
    }
  }, [verify, quota, navigate])

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
              <Controller
                name="formName"
                control={control}
                render={({ field: { value } }) => (
                  <select
                    className="w-full sm:w-52 mt-8 rounded-md border-0 py-3  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={value || currentFormValue}
                    onChange={handleSelectChange}
                  >
                    <option value="" hidden>
                      Select from dropdown
                    </option>
                    <option>Lawyers</option>
                    <option>BondBailsman</option>
                    <option>Security</option>
                    <option>PrivateInvestigators</option>
                  </select>
                )}
              />
            </div>
          </div>
        </div>
      </div>

      {currentFormValue && <div className="mt-2">{renderComponent()}</div>}

    </>
  );
};

export default SelectForm;
