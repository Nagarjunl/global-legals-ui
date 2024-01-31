import { useGetMemberFromSuperIdQuery, useVerifyUserMutation } from "../../services/userAPI";
import { LAWYERS, BAIL_BONDSMAN, SECURITY, PRIVATE_INVESTIGATORS } from "../../constants/constants";
import LawyerEnterDetails from "../SignUpForms/LawyerEnterDetails";
import BondBailsman from "../SignUpForms/BondBailsman";
import SecurityDetails from "../SignUpForms/SecurityDetails";
import PrivateInvestigators from "../SignUpForms/PrivateInvestigators";
import PrimaryButton from "../../components/PrimaryButton";
import { useParams } from "react-router-dom";

const VerifyProfessional = () => {
    const { userId, type } = useParams();
    console.log(userId, type)

    const [verifyUser] = useVerifyUserMutation();

    const submitMember = async (data) => {
        try {
            await verifyUser(data)
                .unwrap()
                .then((res) => {
                    console.log(res);
                });
        } catch (error) {
            console.log("error");
        }
    }

    const renderComponent = (type) => {
        switch (type) {
            case LAWYERS:
                return <LawyerEnterDetails userId={userId} superUser={true} />;
            case BAIL_BONDSMAN:
                return <BondBailsman userId={userId} />;
            case SECURITY:
                return <SecurityDetails userId={userId} />;
            case PRIVATE_INVESTIGATORS:
                return <PrivateInvestigators userId={userId} />;
            default:
                return null;
        }
    };

    return (
        <div >
            <div className="flex items-center justify-between">
                <div >
                    <h3 className="font-medium leading-[34.32px] text-[24px]">
                        Unverified Users
                    </h3>
                </div>

                <div>
                    <PrimaryButton type="submit" buttonText="Verify User" onClick={() => submitMember} />
                </div>
            </div>

            <div className="flex-1 border-t border-gray-300 mt-7"></div>

            {userId && <div className="mt-2">{renderComponent(type)}</div>}

        </div>
    );
};

export default VerifyProfessional;
