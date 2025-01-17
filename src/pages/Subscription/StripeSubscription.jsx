import { useState } from 'react'
import PropTypes from 'prop-types';

import { useCreateMembersMutation } from "../../services/userAPI";
import { useSelector, useDispatch } from 'react-redux';
import { formSubmited, formData, formDataIdProof, formImgStatus } from "../../reducers/formTypeSlice";
import { currentUser } from "../../reducers/userSlice";

import {
    useCreateSubscriptionMutation,
    useGetProductQuery,
} from "../../services/stripeAPI";
import {
    useElements, useStripe, AddressElement,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from "@stripe/react-stripe-js";

// import GlobalLegals from "../../assets/GlobalLegals.svg";

import '../../styles.css';

const stripePriceId = import.meta.env.VITE_STRIPE_PRICE_ID;

const StripeSubscription = (props) => {
    const { showSubscription, setShowSubscription, handleStepClick, fromDashboard } = props;

    const dispatch = useDispatch();

    // Subscribe ------------------

    const [loading, setLoading] = useState(false);

    const user = useSelector((state) => state.user.current_user);

    // API call for get product from stripe
    const { data, isLoading } = useGetProductQuery();

    const stripe = useStripe();
    const elements = useElements();

    const plan = stripePriceId;

    const [createSubscription] = useCreateSubscriptionMutation();
    const [createMembers] = useCreateMembersMutation();

    const currentUserId = useSelector((state) => state.user.current_user.id)
    const formType = useSelector((state) => state.formType.formType);
    const formDatas = useSelector((state) => state.formType.formData);

    const redirect = () => {
        setShowSubscription(!showSubscription)
    }

    const submitMembers = async (data) => {
        const datas = { ...data, userId: currentUserId, type: formType.value }
        try {
            await createMembers(datas)
                .unwrap()
                .then((res) => {
                    const { user } = res;
                    dispatch(formSubmited(true));
                    dispatch(formData(""));
                    dispatch(formDataIdProof(""));
                    dispatch(formImgStatus(false));
                    dispatch(currentUser(user));
                    setLoading(false);
                    handleStepClick(3);
                });
        } catch (error) {
            console.log("error");
        }
    }

    const submitSubscribe = async () => {

        const cardElement = elements.getElement(CardNumberElement);

        const addressElement = elements.getElement('address');

        const { complete, value } = await addressElement.getValue();

        if (complete) {
            setLoading(true);

            // Create Payment method
            const {
                paymentMethod,
                error,
            } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: {
                    name: value.name,
                    address: {
                        city: value.address.city,
                        country: value.address.country,
                        line1: value.address.line1,
                        line2: value.address.line2,
                        postal_code: value.address.postal_code,
                        state: value.address.state
                    },
                },
            })

            if (error) {
                alert(error.message);
                setLoading(false);
                return;
            }

            await createSubscription({
                userId: user.id,
                plan,
                payment_method: paymentMethod,
            }).unwrap()
                .then(async (res) => {

                    if (res.error) {
                        setLoading(false);
                        alert(" Something went wrong please try again");
                        return;
                    }

                    const { latest_invoice } = res;

                    if (latest_invoice.status === "paid") {
                        if (fromDashboard === false) {
                            submitMembers(formDatas);
                        } else {
                            redirect();
                        }
                    }

                    if (latest_invoice.payment_intent) {

                        const { client_secret, status } = latest_invoice.payment_intent;

                        if (status === "requires_action") {
                            const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(client_secret, {
                                payment_method: {
                                    card: cardElement,
                                    billing_details: {
                                        name: value.name,
                                        address: {
                                            city: value.address.city,
                                            country: value.address.country,
                                            line1: value.address.line1,
                                            line2: value.address.line2,
                                        },
                                    },
                                },
                                shipping: {
                                    name: value.name,
                                    address: {
                                        city: value.address.city,
                                        country: value.address.country,
                                        line1: value.address.line1,
                                        line2: value.address.line2,
                                        postal_code: value.address.postal_code,
                                        state: value.address.state
                                    },
                                },
                            })

                            if (confirmationError) {
                                console.error(confirmationError);
                                setLoading(false);
                                alert(" Unable to confirm card");
                                return;
                            }
                        }

                        if (fromDashboard === false) {
                            submitMembers(formDatas);
                        } else {
                            redirect();
                        }
                    }
                });

        }

    }
    return (
        <>

            <div className="mx-auto container sm:px-6 lg:px-12 pb-6">
                {!isLoading ?
                    <div className="mt-5 p-3">
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <div className="mb-5">
                                    {data?.images.map((img, index) => (
                                        <img key={index} src={img} alt="Global Legals" />
                                    ))}
                                    {/* <img src={GlobalLegals} alt="Global Legals" /> */}
                                </div>

                                <h3 className="lg:col-span-3 font-bold leading-[34.32px] text-[24px] mb-3">
                                    {data?.name}
                                </h3>

                                <p className="mb-10">  You can cancel your plan anytime on your settings. </p>
                                <div className='flex w-10/12'>
                                    <div className='mr-2 text-red-600 text-sm'> * </div>
                                    <p className="mb-10 text-red-600 text-sm">  Please do not refresh the page while processing your bank transfer to ensure a smooth transaction.</p>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <label className="text-gray-600 text-[0.93rem]">Enter Card Number</label>
                                    <CardNumberElement />
                                    <p> Please check card number</p>
                                </div>

                                <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4'>
                                    <div className='mb-3'>
                                        <label className="text-gray-600 text-[0.93rem]">Expiration</label>
                                        <CardExpiryElement />
                                        <p> Please check expiration date</p>
                                    </div>

                                    <div className='mb-3 p-Field'>
                                        <label className="text-gray-600 text-[0.93rem]">CVC</label>
                                        <CardCvcElement />
                                        <p> Please check CVC number</p>
                                    </div>
                                </div>

                                {/* <CardElement /> */}
                                <AddressElement options={{
                                    mode: 'billing'
                                }} className='address' />

                                <div className="mt-5 sm:mt-4">
                                    <div className='flex mt-3 w-10/12'>
                                        <div className='mr-2 text-red-600 text-xs'> * </div>
                                        <p className="mb-4 text-red-600 text-xs">  Please do not refresh the page while processing your bank transfer to ensure a smooth transaction.</p>
                                    </div>

                                    {!loading ?
                                        <button
                                            type="button"
                                            className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500  sm:w-auto"
                                            onClick={() => submitSubscribe()}
                                        >
                                            Subscribe & Pay
                                        </button>
                                        :
                                        <div>
                                            <button
                                                className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:w-auto"
                                                disabled="disabled"
                                            >
                                                <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                </svg>
                                            </button>
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flex h-3/6 items-center justify-center">
                        <div>
                            <button
                                className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:w-auto"
                                disabled="disabled"
                            >
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                            </button>
                        </div>
                    </div>
                }
            </div >
        </>
    )
}

export default StripeSubscription;

StripeSubscription.propTypes = {
    handleStepClick: PropTypes.func,
    fromDashboard: PropTypes.bool,
    showSubscription: PropTypes.bool,
    setShowSubscription: PropTypes.func,
}
