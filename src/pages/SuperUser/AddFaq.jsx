import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useGetFaqQuery, useLazyNewEnrollReportQuery, usePostFaqMutation } from '../../services/profileAPI';
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import Select from 'react-select';
import { professionals } from "../../constants/constants";
import { useDispatch, useSelector } from 'react-redux';
import Datepicker from 'react-tailwindcss-datepicker';

const AddFaq = () => {

    const { data, isLoading } = useGetFaqQuery();
    const [postFaq] = usePostFaqMutation();

    return (
        <>
            {!isLoading &&
                <div className="container mx-auto">
                    <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div >
                            <h3 className="font-medium leading-[34.32px] text-[24px]">
                                Frequently asked questions
                            </h3>
                        </div>

                        <div className="md:col-span-2">
                            <div className="sm:flex items-center md:justify-end max-sm:justify-start ">
                                <div className="w-100 relative rounded-md shadow-sm max-sm:w-full max-sm:mt-3 sm:pr-3">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-[7px] pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Enter Name or State only"
                                    />
                                </div>

                                <div className="max-sm:pt-3">
                                    <button type="submit"
                                        className="max-sm:w-[100%] rounded-md text-white bg-blue-800 border-blue-800 px-3 py-2 text-sm font-semibol shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid ">
                                        Ask Qusetions
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <table className="w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b text-left">Question</th>
                                    <th className="py-2 px-4 border-b text-left">Answer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!isLoading && data?.length > 0 ?
                                    data?.map((data) => (
                                        <tr key={data.id}>
                                            <td className="py-2 px-4 border-b">{data?.question}</td>
                                            <td className="py-2 px-4 border-b">{data?.answer}</td>
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

                    {/* <div className="mt-10">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-1 sm:items-center  sm:justify-end max-sm:justify-center">
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
                    </div> */}
                </div>
            }
        </>
    )
}

export default AddFaq;