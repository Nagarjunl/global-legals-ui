import { useState } from "react";
import {
    useCreateSubscriptionMutation,
    useGetProductQuery,
} from "../../services/stripeAPI";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useSelector } from "react-redux";
// const stripePromise = await loadStripe('pk_test_51OWvGSSDcWKAz6oIiMvnjQToKrOu7Pp4aHIKugWHpMTx4K19CajJQDPkx9RnQutL2QxS7cTPIL2yPfRrDefNZig600U6nDGFWZ');

const SubscribeToPlan = () => {
    const [loading, setLoading] = useState(false);

    const user = useSelector((state) => state.user.current_user);

    const { data, isLoading } = useGetProductQuery();

    const stripe = useStripe();
    const elements = useElements();

    const plan = 'price_1OgoYMSDcWKAz6oIb7dIBjv1';

    const [createSubscription] = useCreateSubscriptionMutation();

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

    return (
        <>
            <div className="mx-auto container max-sm:px-6 pb-3">
                <pre className="text-center mt-5 p-3">
                    {!isLoading &&
                        <>
                            <div className="text-center">
                                {data.images.map((img, index) => {
                                    return <img key={index} src={img} alt="Global Legals" className="text-center" />;
                                })}
                            </div>

                            <h3 className="lg:col-span-3 font-bold leading-[34.32px] text-[24px]">
                                {data.name}
                            </h3>
                            <p>  {data.description} </p>


                            {/* < p > Selected plan : <strong> {plan} </strong></p> */}

                            <div className="pt-4">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <CardElement />
                                        <button type="submit"
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 mt-4 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            disabled={loading}
                                        > Subscribe & Pay </button>
                                    </div>
                                </form>
                            </div>
                        </>
                    }

                </pre>
            </div >
        </>
    )
}

export default SubscribeToPlan;