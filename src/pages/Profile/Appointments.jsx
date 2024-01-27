import Tabs from "../../components/tabs";
import { professionalsTabs } from "../../constants/constants";

const Appointments = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-10">
        <div className="flex py-6 flex-row justify-between gap-7">
          <p className="text-black text-2xl font-medium">Dashboard</p>
        </div>

        <Tabs tabs={professionalsTabs} />

      </div>

    </div>
  );
};

export default Appointments;
