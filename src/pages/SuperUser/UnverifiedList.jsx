
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Select from 'react-select';
import ReactPaginate from 'react-paginate';

import { FaEye } from "react-icons/fa";

import { useLazyUnverifiedUserQuery } from "../../services/userAPI";
import { setProfession } from '../../reducers/searchSlice';

import { professionals } from "../../constants/constants";
import { addProfileUser } from "../../reducers/profileSlice";
import Dialogue from "../../components/Dialogue";
import ProfessionalDetails from "../SuperUser/ProfessionalDetails";

const UnverifiedList = () => {
    const dispatch = useDispatch();
    const profession = "";

    const [limit] = useState(50);
    const [offset, setOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    const [openStatus, setOpenStatus] = useState(false);

    const proState = useSelector((state) => state.search.profession);

    const [trigger, { data, isLoading }] = useLazyUnverifiedUserQuery({ limit, offset, profession }, {
        skip: limit === 0 && offset === 0
    });

    const handlePageClick = (event) => {
        const newOffset = (event.selected * limit) % data?.count;
        setOffset(newOffset);
    };

    const handleSelectChange = (value) => {
        setOffset(0);
        dispatch(setProfession(value));
    }

    const handleVerify = (data) => {
        dispatch(addProfileUser(data));
        setOpenStatus(!openStatus)
    }

    useEffect(() => {
        const profession = proState === null ? undefined : proState.value;
        trigger({ limit, offset, profession });
    }, [trigger, limit, offset, proState])

    useEffect(() => {
        if (!isLoading) {
            const count = data === undefined ? 0 : data.count;

            // If condition for set offset for when verify last member in last page of pagination
            if (count > 0 && data?.data?.length === 0) {
                const newOffset = count - limit
                setOffset(newOffset);
            } else {
                setPageCount(Math.ceil(count / limit));
            }
        }
    }, [limit, data, isLoading, setPageCount, setOffset])

    return (
        <div className="container mx-auto">
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div >
                    <h3 className="font-medium leading-[34.32px] text-[24px]">
                        Verify Professionals
                    </h3>
                </div>

                <div>
                    <Select
                        defaultValue={proState}
                        onChange={handleSelectChange}
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
                        {!isLoading && data?.data.length > 0 ?
                            data?.data.map((data) => (
                                <tr key={data.id}>
                                    <td className="py-2 px-4 border-b">{data?.Members[0]?.clientName}</td>
                                    <td className="py-2 px-4 border-b">{data?.email}</td>
                                    <td className="py-2 px-4 border-b">{data?.Members[0]?.type}</td>
                                    <td className="py-2 px-4 border-b">{data?.verify === true ? "true" : "false"}</td>

                                    <td className="flex items-center justify-center py-2 px-4">
                                        <div className="flex  gap-4">
                                            <button
                                                className="hover:text-primary"
                                                onClick={() => handleVerify(data)}>
                                                <FaEye className="aspect-square object-contain object-center w-5 h-5 overflow-hidden shrink-0 max-w-full" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                            :
                            <tr>
                                <td className="py-2 px-4 border-b text-center" colSpan={5}> No Records Found </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>

            <div className="mt-10">
                <div className="flex items-center justify-between">
                    <div className="flex flex-1 sm:items-center sm:justify-end max-sm:justify-center">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel=" > "
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={4}
                            pageCount={pageCount}
                            previousLabel=" < "
                            renderOnZeroPageCount={null}

                            containerClassName="isolate inline-flex -space-x-px rounded-md shadow-sm"
                            previousLinkClassName="relative inline-flex items-center text-sm rounded-l-md px-4 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            nextLinkClassName="relative inline-flex items-center text-sm rounded-r-md px-4 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            pageLinkClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0"
                            breakLinkClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            activeLinkClassName="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        />
                    </div>
                </div>
            </div>

            <div className="relative">
                <Dialogue
                    title="Professional Detail"
                    message={<ProfessionalDetails open={openStatus} setOpen={setOpenStatus} btnLabel="Verify" />}
                    btnText="Verify"
                    setOpenStatus={setOpenStatus}
                    openStatus={openStatus}
                    hideButtons={true}
                />
            </div>
        </div >
    );
};

export default UnverifiedList;
