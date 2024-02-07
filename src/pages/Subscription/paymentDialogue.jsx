import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import PropTypes from 'prop-types';

import {
    useCreateSubscriptionMutation,
    useGetProductQuery,
} from "../../services/stripeAPI";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useSelector } from 'react-redux';

export default function PaymentDialogue(props) {

    const { openStatus } = props;
    const [open, setOpen] = useState(openStatus)

    // Subscribe ------------------

    const [loading, setLoading] = useState(false);

    const user = useSelector((state) => state.user.current_user);

    // API call for get product from stripe
    const { data, isLoading } = useGetProductQuery();

    const stripe = useStripe();
    const elements = useElements();

    const plan = 'price_1OgoYMSDcWKAz6oIb7dIBjv1';

    const [createSubscription] = useCreateSubscriptionMutation();

    const submitSubscribe = async () => {
        setLoading(true);
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

                    setOpen(false);

                    // alert("You  are subscribed!");
                }
            });

    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <div className="mt-2">
                                            <div className="text-sm text-gray-500">
                                                <div className="mx-auto container max-sm:px-6 pb-3">
                                                    {!isLoading &&
                                                        <div className="text-center mt-5 p-3">
                                                            <div className="flex min-h-full items-end justify-center mb-5">
                                                                {data.images.map((img, index) => (
                                                                    <img key={index} src={img} alt="Global Legals" className="text-center" />
                                                                ))}
                                                            </div>

                                                            <h3 className="lg:col-span-3 font-bold leading-[34.32px] text-[24px] mb-3">
                                                                {data.name}
                                                            </h3>

                                                            <p className="mb-10">  You can cancel your plan anytime on your settings. </p>

                                                            <div className="pt-4">
                                                                <CardElement />
                                                            </div>

                                                        </div>
                                                    }
                                                </div >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                        onClick={() => submitSubscribe()}
                                    >
                                        Subscribe & Pay
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

PaymentDialogue.propTypes = {
    openStatus: PropTypes.bool,
}
