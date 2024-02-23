
import { useRef, useState } from "react";
import PropTypes from 'prop-types';

import { useSelector } from "react-redux";
import { useGetMemberQuery, useVerifyUserMutation, useUnverifyUserMutation } from "../../services/userAPI";

import { BAIL_BONDSMAN, LAWYERS, PRIVATE_INVESTIGATORS, SECURITY } from "../../constants/constants";

import profileImg from "../../assets/avator.png";

import BBMDetails from "./DetailPages/BBMDetails";
import LAWDetails from "./DetailPages/LAWDetails";
import PIDetails from "./DetailPages/PIDetails";
import SECDetails from "./DetailPages/SECDetails";

import Dialogue from "../../components/Dialogue";

// const baseUrl = import.meta.env.VITE_API_URL;
const baseUrl = "https://api.chitmanager.com/";

const ProfessionalDetails = (props) => {

    const { setOpen, hideButtons, btnLabel } = props;

    const cancelButtonRef = useRef(null)
    const [openStatus, setOpenStatus] = useState(false);

    const slug = useSelector(state => state.profile.profileUser.Members[0].slug)

    const { data, isLoading } = useGetMemberQuery(slug, { skip: slug === undefined });

    const [verifyUser, { isLoading: verifyingmember }] = useVerifyUserMutation();
    const [unverifyUser, { isLoading: unverifyingmember }] = useUnverifyUserMutation();

    const submitVerify = async (id) => {
        try {
            await verifyUser(id)
                .unwrap()
                .then((res) => {
                    console.log(res);
                    setOpenStatus(!openStatus);
                    setOpen(false);
                });
        } catch (error) {
            console.log("error");
        }
    }

    const submitUnverify = async (id) => {
        try {
            await unverifyUser(id)
                .unwrap()
                .then((res) => {
                    console.log(res);
                    setOpenStatus(!openStatus);
                    setOpen(false);
                });
        } catch (error) {
            console.log("error");
        }
    }

    return (
        <>
            {!isLoading && data.type === BAIL_BONDSMAN &&
                <BBMDetails data={data} baseUrl={baseUrl} profileImg={profileImg} />
            }

            {!isLoading && data.type === LAWYERS &&
                <LAWDetails data={data} baseUrl={baseUrl} profileImg={profileImg} />
            }

            {!isLoading && data.type === PRIVATE_INVESTIGATORS &&
                <PIDetails data={data} baseUrl={baseUrl} profileImg={profileImg} />
            }

            {!isLoading && data.type === SECURITY &&
                <SECDetails data={data} baseUrl={baseUrl} profileImg={profileImg} />
            }
            {!hideButtons &&

                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                        onClick={() => setOpenStatus(true)}
                    >
                        {btnLabel}
                    </button>
                    <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                    >
                        Cancel
                    </button>
                </div>

            }
            <div className="relative">
                <Dialogue
                    title="Are your sure"
                    message="Are your sure?"
                    btnText="Submit"
                    setOpenStatus={setOpenStatus}
                    openStatus={openStatus}
                    submitMethod={btnLabel === "Unverify" ? submitUnverify : submitVerify}
                    loading={btnLabel === "Unverify" ? unverifyingmember : verifyingmember}
                />
            </div>

        </>
    )
}

export default ProfessionalDetails;

ProfessionalDetails.propTypes = {
    setOpen: PropTypes.func,
    hideButtons: PropTypes.bool,
    btnLabel: PropTypes.string,
}