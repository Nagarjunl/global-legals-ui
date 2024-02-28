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
                        {!isLoading &&
                            data?.data.map((data) => (
                                <tr key={data.id}>
                                    <td className="py-2 px-4 border-b">{data.id}</td>
                                    <td className="py-2 px-4 border-b">{data.total}</td>
                                    <td className="py-2 px-4 border-b">{data.status}</td>
                                    <td className="py-2 px-4 border-b">{new Date(data.period_start * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                </tr>

                            ))
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
