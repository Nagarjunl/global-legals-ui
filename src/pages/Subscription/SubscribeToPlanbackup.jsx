import { useEffect, useState } from "react";
import {
    useGetSubscriptionsQuery,
    useCancelSubscriptionMutation,
    useCreateSubscriptionMutation,
} from "../../services/stripeAPI";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useSelector } from "react-redux";
// const stripePromise = await loadStripe('pk_test_51OWvGSSDcWKAz6oIiMvnjQToKrOu7Pp4aHIKugWHpMTx4K19CajJQDPkx9RnQutL2QxS7cTPIL2yPfRrDefNZig600U6nDGFWZ');

const SubscribeToPlan = () => {

    const user = useSelector((state) => state.user.current_user);

    const stripe = useStripe();
    const elements = useElements();

    const [plan, setPlan] = useState();
    const [userId, setUserId] = useState();
    const [loading, setLoading] = useState(false);
    const [clientSecret, setClientSecret] = useState("");

    const [show, setShow] = useState(false);

    const [createSubscription] = useCreateSubscriptionMutation();
    const [cancelSubscription, { isLoading: cancelingSubscription }] = useCancelSubscriptionMutation();

    // Fetch currnet subscriptions from API
    const { data: subscription, isLoading: fetchingSubscriptions } = useGetSubscriptionsQuery(userId, {
        skip: userId === undefined,
    });

    const cancel = async (data) => {
        setLoading(true);
        try {
            await cancelSubscription(data).unwrap()
                .then(() => {
                    alert('Canceled subscription');
                    setLoading(false);
                });
        } catch (error) {
            console.log("error");
        }
    }

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        const cardElement = elements.getElement(CardElement);
        // Create Payment method
        const {
            paymentMethod,
            error,
        } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        })


        if (error) {
            alert(error.message);
            setLoading(false);
            return;
        }

        await createSubscription({
            userId: user.id,
            plan,
            payment_method: paymentMethod.id,
        }).unwrap()
            .then(async (res) => {
                const { latest_invoice } = res;
                if (latest_invoice.payment_intent) {

                    const { client_secret, status } = latest_invoice.payment_intent;

                    if (status === "requires_action") {
                        console.log(client_secret, status);
                        const { error: confirmationError } = await stripe.confirmCardPayment(client_secret, {
                            payment_method: {
                                card: cardElement,
                                billing_details: {
                                    name: 'Naga',
                                    address: {
                                        city: 'Tirupur',
                                        country: 'US',
                                        line1: '7th street',
                                        line2: 'PKR Layout',
                                    },
                                },
                            },
                            shipping: {
                                name: 'Naga',
                                address: {
                                    city: 'Tirupur',
                                    country: 'US',
                                    line1: '7th street',
                                    line2: 'PKR Layout',
                                    postal_code: '22222',
                                    state: 'Virgina'
                                },
                                carrier: "ITE",
                                phone: "222222222",
                                tracking_number: "ghg2323232",
                            }
                        })

                        if (confirmationError) {
                            console.error(confirmationError);
                            alert(" Unable to confirm card");
                            return;
                        }
                    }

                    alert("You  are subscribed!");
                }
            });

    }

    useEffect(() => {
        if (user !== null)
            setUserId(user.id);
    }, [user, setUserId])

    return (
        <>
            <div className="mx-auto container max-sm:px-6 lg:px-[120px] pb-3">
                <pre className="text-center shadow-md mt-5 p-3">
                    <h3 className="lg:col-span-3 font-bold leading-[34.32px] text-[24px]">
                        Plans
                    </h3>
                    {!fetchingSubscriptions &&
                        <>
                            {subscription?.data?.map(sub => (
                                <div key={sub.id}>
                                    {sub.id}. Next payment of {sub?.items?.data?.plan?.amount} due {" "}
                                    {new Date(sub.current_period_end * 1000).toUTCString()}
                                    <button onClick={() => cancel({ userId, subscriptionId: sub.id })} disabled={cancelingSubscription}
                                        className="rounded-md text-white bg-blue-800 border-blue-800 px-3 py-2 text-sm font-semibol shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ))}
                        </>
                    }

                    <button onClick={() => setPlan('price_1OgoYMSDcWKAz6oIb7dIBjv1')}
                        className="rounded-md text-white bg-blue-800 border-blue-800 px-3 py-2 text-sm font-semibol shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid"
                    >
                        Subscripe this plan
                    </button>

                    <p> Selected plan : <strong> {plan} </strong></p>

                    {/* {show && */}
                    <div className="pt-4">
                        <form onSubmit={handleSubmit} hidden={!plan}>
                            <div>
                                {/* <PaymentElement options={clientSecret} /> */}
                                <CardElement />
                                {/* <AddressElement /> */}
                                <button type="submit"
                                    className="flex justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                // disabled={loading}
                                > Subscribe & Pay </button>
                            </div>
                        </form>
                    </div>
                    {/* } */}

                </pre>
            </div>
        </>
    )
}



export default SubscribeToPlan;