import Tabs from "../../components/tabs";
import { superUserTabs } from "../../constants/constants";

const IndProfessional = () => {
    return (
        <div >
            <div className="mb-6">
                <div >
                    <h3 className="font-medium leading-[34.32px] text-[24px]">
                        Professional Name
                    </h3>
                </div>
            </div>

            <Tabs tabs={superUserTabs} />

        </div>
    );
};

export default IndProfessional;
