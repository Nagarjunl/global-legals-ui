import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useState } from "react"
import { usePaymentIntentApiMutation } from "../services/userAPI";

const PaymentIntent = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [amount, setAmount] = useState(0);
    const [paymentIntent, setPaymentIntent] = useState();

    const [paymentIntentApi] = usePaymentIntentApiMutation();

    const createPaymentIntent = async () => {
        const validAmount = Math.min(Math.max(amount, 50), 99999999);
        setAmount(validAmount);
        try {
            await paymentIntentApi(validAmount)
                .unwrap()
                .then((res) => {
                    setPaymentIntent(res);
                })
        } catch (error) {
            console.log("error");
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const cardElement = elements.getElement(CardElement);

        const {
            paymentIntent: updatePaymentIntent,
            error,
        } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
            payment_method: { card: cardElement }
        })

        if (error) {
            console.error(error);
            error.payment_intent && setPaymentIntent(error.payment_intent)
        }
        else {
            setPaymentIntent(updatePaymentIntent);
        }
    }

    return (
        <>
            <div className="container mx-auto sm:px-6 lg:px-12">
                <div className="pt-4">
                    <div className="flex items-center justify-center">
                        <input
                            type="number"
                            value={amount}
                            disabled={paymentIntent}
                            onChange={(e) => { setAmount(e.target.value); }}
                            className="block  p-3 rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <button
                            disabled={amount <= 0}
                            onClick={createPaymentIntent}
                            hidden={paymentIntent}
                            className="flex  justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Ready TO pay ${(amount / 100).toFixed(2)}
                        </button>
                    </div>
                    <div className="pt-4">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <CardElement />
                                <button type="submit"
                                    className="flex justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                > Pay</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PaymentIntent;