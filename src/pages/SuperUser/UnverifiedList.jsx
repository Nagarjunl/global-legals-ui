import { useState } from "react";
import { useUnverifiedUserQuery } from "../../services/userAPI";
import Select from 'react-select';
import { professionals } from "../../constants/constants";
import { FaEye } from "react-icons/fa";
import Pagination from "../../components/pagination";
import { Link } from "react-router-dom";


const UnverifiedList = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const { data, isLoading } = useUnverifiedUserQuery();
    return (
        <div >
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div >
                    <h3 className="font-medium leading-[34.32px] text-[24px]">
                        Unverified Users
                    </h3>
                </div>

                <div>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={professionals}
                        className="border rounded-md"
                        isClearable={true}
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
                            <th className="py-2 px-4 border-b text-left">Profession</th>
                            <th className="py-2 px-4 border-b text-left">Verification Status</th>
                            <th className="py-2 px-4 border-b text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!isLoading &&
                            data?.map((data) => (
                                <tr key={data.id}>
                                    <td className="py-2 px-4 border-b">ClientName</td>
                                    <td className="py-2 px-4 border-b">{data?.email}</td>
                                    <td className="py-2 px-4 border-b">Lawyer</td>
                                    <td className="py-2 px-4 border-b">unverified</td>

                                    <td className="flex items-center justify-center py-2 px-4">
                                        <div className="flex  gap-4">
                                            <Link
                                                className="hover:text-primary"
                                                to={`/admin/verifyProfessional/${data.id}/${data?.Members[0]?.type}`}>
                                                <FaEye className="aspect-square object-contain object-center w-5 h-5 overflow-hidden shrink-0 max-w-full"
                                                />
                                            </Link>
                                        </div>
                                    </td>
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

export default UnverifiedList;
