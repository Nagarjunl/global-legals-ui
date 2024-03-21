import { CheckIcon } from '@heroicons/react/20/solid'
import {
    useCancelSubscriptionMutation, useGetSubscriptionsQuery,
    // useResumeSubscriptionMutation
} from "../../services/stripeAPI";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PaymentDialogue from '../Subscription/paymentDialogue';
import StripeSubscription from '../Subscription/StripeSubscription';

const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
]

export default function Plans() {
    const [userId, setUserId] = useState();
    const [openStatus, setOpenStatus] = useState(false);
    const [showSubscription, setShowSubscription] = useState(false);

    const user = useSelector((state) => state.user.current_user);
    const [cancelSubscription, { isLoading: cancelingSubscription }] = useCancelSubscriptionMutation();
    // const [resumeSubscription, { isLoading: resumingSubscription }] = useResumeSubscriptionMutation();

    // Fetch currnet subscriptions from API
    const { data: subscription, isLoading: fetchingSubscriptions } = useGetSubscriptionsQuery(userId, {
        skip: userId === undefined,
    });

    const cancel = async (data) => {
        try {
            await cancelSubscription(data).unwrap()
                .then(() => {
                    alert('Subscription Canceled');
                    // setOpenStatus(false);
                });
        } catch (error) {
            console.log("error");
        }
    }

    useEffect(() => {
        if (user !== null)
            setUserId(user.id);
    }, [user, setUserId])

    return (
        <>

            {showSubscription ?
                <StripeSubscription
                    showSubscription={showSubscription}
                    setShowSubscription={setShowSubscription}
                    fromDashboard={true}
                />
                :
                <div className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto my-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Monthly Billing </h3>
                                <p className="my-5 text-base leading-7 text-gray-600">
                                    Enjoy seamless services with hassle-free monthly billing.
                                </p>

                                <h3 className="text-2xl font-bold tracking-tight text-gray-900"> Cancellation</h3>
                                <p className="mt-6 text-base leading-7 text-gray-600">
                                    Cancel anytime with our simple and convenient cancellation process."
                                </p>
                                {/* <div className="mt-10 flex items-center gap-x-4">
                                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                                    <div className="h-px flex-auto bg-gray-100" />
                                </div> */}
                                {/* <ul
                                    role="list"
                                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                                >
                                    {includedFeatures.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul> */}
                            </div>
                            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                    <div className="mx-auto max-w-xs px-8">
                                        <p className="text-base font-semibold text-gray-600">Per Month</p>
                                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                            <span className="text-5xl font-bold tracking-tight text-gray-900">$10</span>
                                            <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                                        </p>


                                        {!fetchingSubscriptions ?
                                            <>
                                                {subscription?.data?.map(sub => (
                                                    <div key={sub.id}>
                                                        <p className="mt-6 text-xs leading-5 text-gray-600">
                                                            Next payment of $10 due {" "}
                                                            {new Date(sub.current_period_end * 1000).toUTCString()}
                                                        </p>
                                                        {!cancelingSubscription ?
                                                            <button onClick={() => cancel({ userId, subscriptionId: sub.id })}
                                                                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                            >
                                                                Cancel Plan
                                                            </button>
                                                            :
                                                            <button
                                                                className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                                                disabled="disabled"
                                                            >
                                                                <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                                </svg>
                                                            </button>
                                                        }
                                                    </div>
                                                ))}
                                            </>
                                            :
                                            <button
                                                className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                                disabled="disabled"
                                            >
                                                <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                </svg>
                                            </button>
                                        }

                                        {!fetchingSubscriptions &&
                                            <>
                                                {subscription?.data?.length === 0 &&
                                                    <>
                                                        <button
                                                            className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                            // onClick={() => setOpenStatus(!openStatus)}
                                                            onClick={() => setShowSubscription(!showSubscription)}
                                                        >
                                                            Subscribe
                                                        </button>

                                                        <p className="mt-6 text-xs leading-5 text-gray-600">
                                                            Subscribe You can cancel it Later
                                                        </p>
                                                    </>
                                                }
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {openStatus &&
                <PaymentDialogue
                    openStatus={openStatus}
                    setOpenStatus={setOpenStatus}
                    fromDashboard={true} />
            }


        </>
    )
}
