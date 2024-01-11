import Asset from "../../assets/pay.jpg";
import { useCreateMembersMutation, useMakePaymentMutation } from "../../services/userAPI";
import { useSelector, useDispatch } from 'react-redux';
import { currentUser } from "../../reducers/userSlice";
import { formSubmited, formData } from "../../reducers/formTypeSlice";
import { loadStripe } from '@stripe/stripe-js';


const people = [
  {
    name: "Exclusive Visibility",
    title:
      "Enjoy top-tier visibility among professionals on our platform, giving you a competitive edge in connecting with clients.",
  },
  {
    name: "Prominent Listings",
    title:
      "Your profile takes center stage in search results, ensuring potential clients find and engage with your services first",
  },
  {
    name: "Credibility ",
    title:
      "Showcase your commitment to  with a verified badge, reassuring clients that your professional details have been authenticated",
  },
  {
    name: "Targeted Marketing ",
    title:
      "Benefit from strategic marketing efforts aimed at expanding your reach and attracting clients seeking legal expertise",
  },
];
const PayPremium = ({ handleStepClick }) => {
  const [createMembers, { isLoading }] = useCreateMembersMutation();
  const [makePayment, { isLoading: fetchigData }] = useMakePaymentMutation();

  const dispatch = useDispatch();

  const currentUserId = useSelector((state) => state.user.id)
  const formType = useSelector((state) => state.formType.formType);
  const formDatas = useSelector((state) => state.formType.formData);

  const submitMembers = async (data) => {
    const datas = { ...data, userId: currentUserId, type: formType }
    try {
      await createMembers(datas)
        .unwrap()
        .then((res) => {
          const { result3, ...rest } = res;

          dispatch(formSubmited(true));
          dispatch(formData(""));
          dispatch(currentUser(result3));
          handleStepClick(2);
          // stripe.redirectToCheckout();

        });
    } catch (error) {
      console.log("error");
    }
  }

  const makePaymentMethod = async (datas) => {
    const stripe = await loadStripe('pk_test_51OWvGSSDcWKAz6oIiMvnjQToKrOu7Pp4aHIKugWHpMTx4K19CajJQDPkx9RnQutL2QxS7cTPIL2yPfRrDefNZig600U6nDGFWZ');
    try {
      await makePayment(datas)
        .unwrap()
        .then((res) => {
          stripe.redirectToCheckout({
            sessionId: res.id,
          })
          submitMembers(datas);
        })

    } catch (error) {
      console.log("error");
    }
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-start pt-4">
        <img src={Asset} alt="Your Image" className="block mx-auto" />
      </div>
      <div className="text-center pt-3 text-2xl">
        Invest in Your Success: Unlock <br />
        Premium Membership for $10/ month!
      </div>
      <div className="text-center pt-3 text-sm">
        Thank you for choosing Globallegals to enhance your professional
        presence. <br /> We&lsquo;re excited to offer you an exclusive premium
        membership that comes <br /> with unparalleled benefits tailored to
        boost your legal practice.
      </div>
      <div className="text-center pt-16 text-2xl">Why Go Premium?</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-3 max-w-screen-lg mx-auto">
        {people.map((person, index) => (
          <div
            className="bg-white p-4 rounded-md border border-solid border-white-200"
            key={index}
          >
            <h2 className="font-semibold mb-2 text-base text-center">
              {person.name}
            </h2>
            <p className="text-gray-600 text-xs text-center">{person.title} </p>
          </div>
        ))}
      </div>
      <div className="text-center pt-14 text-2xl">
        Ready to Uplift your career?
      </div>
      <div className="text-center pt-3 text-sm">
        Complete your payment now to embark on a premium experience tailored
        <br /> for legal professionals.
      </div>
      <div className="flex justify-center items-center mt-4 my-3">
        <button
          type="button"
          className="rounded bg-blue-600 w-96 h-10  px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => makePaymentMethod(formDatas)}
          disabled={isLoading}
        >
          Proceed to pay $10
        </button>
      </div>
    </div>
  );
};

export default PayPremium;
