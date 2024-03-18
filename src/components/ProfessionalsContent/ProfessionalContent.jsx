import { BAIL_BONDSMAN, LAWYERS, PRIVATE_INVESTIGATORS, SECURITY } from "../../constants/constants";
import BBMContent from "./BBMContent";
import LawyerContent from "./LawyerContent";

import PropTypes from 'prop-types';
import SecurityContent from "./SecurityContent";
import PIContent from "./PIContent";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../TermsAndConditions/PrivacyPolicy";


const ProfessionalContent = (props) => {
    const { setOpen, type } = props;
    return (
        <>
            {type === BAIL_BONDSMAN &&
                <BBMContent />
            }

            {type === LAWYERS &&
                <LawyerContent />
            }

            {type === PRIVATE_INVESTIGATORS &&
                <PIContent />
            }

            {type === SECURITY &&
                <SecurityContent />
            }

            {type === "TERMS" &&
                <TermsAndConditions />
            }
            {type === "PRIVACY" &&
                <PrivacyPolicy />
            }

            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                >
                    Close
                </button>
            </div>
        </>
    )
}

export default ProfessionalContent;

ProfessionalContent.propTypes = {
    setOpen: PropTypes.func,
    type: PropTypes.string,
}