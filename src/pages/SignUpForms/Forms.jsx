import LawyerEnterDetails from "./LawyerEnterDetails";
import BondBailsman from "./BondBailsman";
import SecurityDetails from "./SecurityDetails";
import PrivateInvestigators from "./PrivateInvestigators";
import { useSelector, useDispatch } from 'react-redux';
import { formType, formData, formDataIdProof, formImgStatus } from "../../reducers/formTypeSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LAWYERS, BAIL_BONDSMAN, SECURITY, PRIVATE_INVESTIGATORS, professionals } from "../../constants/constants";
import Select from 'react-select';
import PropTypes from 'prop-types';

const SelectForm = ({ handleStepClick }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentFormValue = useSelector((state) => state.formType.formType);
  const quota = useSelector((state) => state.user.current_user.quota);
  const verify = useSelector((state) => state.user.current_user.verify);

  const handleSelectChange = (data) => {
    dispatch(formType(data || ""));
    dispatch(formData(""));
    dispatch(formDataIdProof(""));
    dispatch(formImgStatus(false));
    renderComponent();
  };

  const renderComponent = () => {
    switch (currentFormValue.value) {
      case LAWYERS:
        return <LawyerEnterDetails handleStepClick={handleStepClick} />;
      case BAIL_BONDSMAN:
        return <BondBailsman handleStepClick={handleStepClick} />;
      case SECURITY:
        return <SecurityDetails handleStepClick={handleStepClick} />;
      case PRIVATE_INVESTIGATORS:
        return <PrivateInvestigators handleStepClick={handleStepClick} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (quota === true && verify === true) {
      navigate('/professional/appointments')
    } else if (quota === true) {
      navigate('/professional/verification')
    } else {
      navigate('/professional')
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
                provide you with the best experience on Global Legals
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 ">
            <div className="pt-4">
              <Select
                defaultValue={currentFormValue}
                onChange={(data) => { handleSelectChange(data) }}
                options={professionals}
                className="border rounded-md"
                isClearable={true}
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

SelectForm.propTypes = {
  handleStepClick: PropTypes.func,
}
