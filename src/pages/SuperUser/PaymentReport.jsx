import { useState } from "react";
import { useUnverifiedUserQuery } from "../../services/userAPI";
import Select from 'react-select';
import { paidStatus } from "../../constants/constants";
import Pagination from "../../components/pagination";


const PaymentReport = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const { data, isLoading } = useUnverifiedUserQuery();

    return (
        <div >
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div >
                    <h3 className="font-medium leading-[34.32px] text-[24px]">
                        User Payment Detail
                    </h3>
                </div>

                <div>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={paidStatus}
                        className="border rounded-md"
                        isClearable={false}
                        placeholder="Select Profession"
                    />
                </div>

            </div>

            <div className="flex items-center">
                <table className="w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-left">Name</th>
                            <th className="py-2 px-4 border-b text-left">Email</th>
                            <th className="py-2 px-4 border-b text-left">Paid Status</th>
                            <th className="py-2 px-4 border-b text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!isLoading &&
                            data?.map((data) => (
                                <tr key={data.id}>
                                    <td className="py-2 px-4 border-b">Client Name</td>
                                    <td className="py-2 px-4 border-b">{data?.email}</td>
                                    <td className="py-2 px-4 border-b">Paid</td>
                                    <td className="py-2 px-4 border-b">01/12-2024</td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div className="mt-6">
                <Pagination />
            </div>

        </div>
    );
};

export default PaymentReport;
