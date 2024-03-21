import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useLazyNewEnrollReportQuery } from '../../services/profileAPI';

import Select from 'react-select';
import { professionals } from "../../constants/constants";
import { useDispatch, useSelector } from 'react-redux';
import { setDateRange, setProfession } from '../../reducers/searchSlice';
import Datepicker from 'react-tailwindcss-datepicker';

const NewEnrolls = () => {

    const dispatch = useDispatch();
    const [profession] = useState();
    const startDate = "";
    const endDate = "";

    const [date, setDate] = useState({
        startDate: null,
        endDate: null
    });

    const [limit] = useState(50);
    const [offset, setOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    const user = useSelector((state) =>
        state.user.current_user.role === "Founder" ?
            state.profile.profileUser : state.user.current_user
    );

    const proState = useSelector((state) => state.search.profession);
    const dateState = useSelector((state) => state.search.dateRange);

    const [trigger, { data, isLoading }] = useLazyNewEnrollReportQuery({ limit, offset, startDate, endDate, profession }, {
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

    const handleValueChange = (newValue) => {
        setOffset(0);
        setDate(newValue);
        dispatch(setDateRange(newValue));
    }

    useEffect(() => {
        if (user !== null) {
            const startDate = dateState === null ? undefined : dateState.startDate;
            const endDate = dateState === null ? undefined : dateState.endDate;
            const profession = proState === null ? undefined : proState.value;

            trigger({ limit, offset, startDate, endDate, profession })
        }

    }, [user, trigger, limit, offset, dateState, proState])

    useEffect(() => {
        if (!isLoading) {
            setPageCount(Math.ceil(data?.count / limit));
        }
    }, [limit, data, isLoading, dateState, proState])

    return (
        <>
            {!isLoading &&
                < div className="container mx-auto">
                    <div className="grid xs:grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div >
                            <h3 className="font-medium leading-[34.32px] text-[24px]">
                                New Enrolls
                            </h3>
                        </div>

                        <div className="sm:col-span-2">
                            <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4">
                                <Select
                                    onChange={handleSelectChange}
                                    options={professionals}
                                    className="border rounded-md"
                                    isClearable={true}
                                    placeholder="Select Profession"
                                />
                                <div className="relative rounded-md shadow-sm">
                                    <Datepicker
                                        primaryColor={"blue"}
                                        value={date}
                                        onChange={handleValueChange}
                                        showShortcuts={true}
                                        readOnly={true}
                                        inputClassName="w-full rounded-md py-[7px] pl-2 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 font-normal"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <table className="w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b text-left">Name</th>
                                    <th className="py-2 px-4 border-b text-left">Email</th>
                                    <th className="py-2 px-4 border-b text-left">Payment Status</th>
                                    <th className="py-2 px-4 border-b text-left">Verification Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!isLoading && data?.data.length > 0 ?
                                    data?.data.map((data) => (
                                        <tr key={data.id}>
                                            <td className="py-2 px-4 border-b">{data?.Members[0]?.clientName}</td>
                                            <td className="py-2 px-4 border-b">{data?.email}</td>
                                            <td className="py-2 px-4 border-b">Success</td>
                                            <td className="py-2 px-4 border-b">{data?.verify === true ? "true" : "false"}</td>
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
                            <div className="flex flex-1 sm:items-center  sm:justify-end max-sm:justify-center">
                                {/* <div>
                                    <p className="text-sm text-gray-700">
                                        Showing <span className="font-medium"> {offset} </span> to <span className="font-medium"> {selected} </span> of{' '}
                                        <span className="font-medium"> {data?.count} </span> results
                                    </p>
                                </div> */}
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
                </div>
            }
        </>
    )
}

export default NewEnrolls;