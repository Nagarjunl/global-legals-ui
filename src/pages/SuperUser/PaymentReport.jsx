import { useEffect, useState } from "react";
import StripePagination from "../../components/StripePagination";
import { useGetInvoicesQuery } from "../../services/stripeAPI";
import { useSelector } from "react-redux";

const PaymentReport = () => {

    const [userId, setUserId] = useState();
    const [limit, setLimit] = useState(0);
    const [startingAfter, setStartingAfter] = useState("nouser");
    const [endingBefore, setEndingBefore] = useState();

    const [next, setNext] = useState();
    const [previous, setPrevious] = useState();


    const user = useSelector((state) =>
        state.user.current_user.role === "Founder" ?
            state.profile.profileUser : state.user.current_user
    );

    const { data, isLoading } = useGetInvoicesQuery({ userId, limit, startingAfter, endingBefore }, {
        skip: userId === undefined && limit === 0
    });

    useEffect(() => {
        if (user !== null) {
            setLimit(2);
            setUserId(user.id);
        }
    }, [user, setUserId])

    const setNextId = () => {
        setNext(true);
        setPrevious(false);
        setEndingBefore(undefined);
        setStartingAfter(data.data[data.data.length - 1].id);
    };

    const setPreviousId = () => {
        setNext(false);
        setPrevious(true);
        setEndingBefore(data.data[0].id)
        setStartingAfter(undefined);
    };

    return (
        <div>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div >
                    <h3 className="font-medium leading-[34.32px] text-[24px]">
                        User Payment Detail
                    </h3>
                </div>

                {/* <div>
                    <Select
                        onChange={(option) => { handleSelectChange(option) }}
                        options={paidStatus}
                        className="border rounded-md"
                        isClearable={false}
                        placeholder="Select Profession"
                    />
                </div> */}

            </div>

            <div className="flex items-center">
                <table className="w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-left">Email</th>
                            <th className="py-2 px-4 border-b text-left">Total</th>
                            <th className="py-2 px-4 border-b text-left">Paid Status</th>
                            <th className="py-2 px-4 border-b text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!isLoading ?
                            data?.data.map((data) => (
                                <tr key={data.id}>
                                    <td className="py-2 px-4 border-b">{data.id}</td>
                                    <td className="py-2 px-4 border-b">{data.total}</td>
                                    <td className="py-2 px-4 border-b">{data.status}</td>
                                    <td className="py-2 px-4 border-b">{new Date(data.period_start * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                </tr>
                            ))
                            :
                            <tr>
                                <td className="py-2 px-4 border-b text-center" colSpan={4}>
                                    <button
                                        className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                        disabled="disabled"
                                    >
                                        <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>

            {!isLoading &&
                <div className="mt-6">
                    <StripePagination
                        setNextId={setNextId}
                        setPreviousId={setPreviousId}
                        hasMore={data?.has_more}
                        next={next}
                        previous={previous}
                    />
                </div>
            }

        </div>
    );
};

export default PaymentReport;
