import { useEffect, useState } from 'react';
import { useDeleteFaqMutation, useGetFaqQuery, useSearchFaqQuery } from '../../services/profileAPI';
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import Dialogue from "../../components/Dialogue";
import CreateFaq from './CreateFaq';
import { FaTrash } from 'react-icons/fa';


const AddFaq = () => {

    // const { data, isLoading } = useGetFaqQuery();

    const [openStatus, setOpenStatus] = useState(false);
    const [searchParams, setSearchParams] = useState();


    const [deleteFaq] = useDeleteFaqMutation();

    const deleteQuestion = async (id) => {
        try {
            await deleteFaq(id).unwrap().then(() => { });
        } catch (error) {
            console.log("error");
        }
    }

    const { data, isLoading } = useSearchFaqQuery(searchParams, {
        skip: searchParams === undefined,
    });

    const searchQuestions = (e) => {
        console.log(e.target.value);
        if (e.target.value === "") {
            setSearchParams("true")
        }
        delayedFetchSearchResults(e.target.value);
    }

    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    };

    const delayedFetchSearchResults = debounce((query) => {
        setSearchParams(query);
    }, 500);

    useEffect(() => {
        setSearchParams("true")
    }, []);

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
                                        placeholder="Search Question"
                                        onChange={(e) => searchQuestions(e)}
                                    />
                                </div>

                                <div className="max-sm:pt-3">
                                    <button type="submit"
                                        onClick={() => setOpenStatus(!openStatus)}
                                        className="max-sm:w-[100%] rounded-md text-white bg-blue-800 border-blue-800 px-3 py-2 text-sm font-semibol shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid ">
                                        Add Questions
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
                                    <th className="py-2 px-4 border-b text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!isLoading && data?.length > 0 ?
                                    data?.map((data) => (
                                        <tr key={data.id}>
                                            <td className="py-2 px-4 border-b">{data?.question}</td>
                                            <td className="py-2 px-4 border-b">{data?.answer}</td>
                                            <td className="py-2 px-4 border-b">
                                                <div className="flex  gap-4">
                                                    <button
                                                        className="hover:text-primary"
                                                        onClick={() => deleteQuestion(data.id)}>
                                                        <FaTrash className="aspect-square object-contain object-center w-5 h-5 overflow-hidden shrink-0 max-w-full" />
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
                </div>
            }

            <div className="relative">
                <Dialogue
                    title="Add FAQ"
                    message={<CreateFaq open={openStatus} setOpen={setOpenStatus} btnLabel="Submit" formType="postQuestion" />}
                    setOpenStatus={setOpenStatus}
                    openStatus={openStatus}
                    hideButtons={true}
                />
            </div>
        </>
    )
}

export default AddFaq;