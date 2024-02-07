import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFindFromUserQuery } from "../../services/stripeAPI";

const TableData = () => {
    const [memberId, setMemberId] = useState();
    const user = useSelector((state) => state.user.current_user);

    const { data: member, isLoading } = useFindFromUserQuery(memberId, { skip: memberId === undefined });

    useEffect(() => {
        if (user)
            setMemberId(user.id);
    }, [user, setMemberId]);

    return (
        <>
            <div className="mx-auto container max-sm:px-6 lg:px-[120px] pb-3">
                <pre className="text-center shadow-md mt-5 p-3">
                    <h3 className="lg:col-span-3 font-bold leading-[34.32px] text-[24px]">
                        User Data
                    </h3>
                    {!isLoading &&
                        <>
                            Own Id : {member?.id} <br />
                            StripeCustomerId: {member?.stripeCustomerId}<br />
                            Subscriptions: {JSON.stringify(member?.authPlans || [])}
                        </>
                    }

                </pre>
            </div>
        </>
    )
}

export default TableData;



