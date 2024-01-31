import Asset from "../../assets/pay.jpg";
import { useCreateMembersMutation, useMakePaymentMutation } from "../../services/userAPI";
import { useSelector, useDispatch } from 'react-redux';
import { currentUser } from "../../reducers/userSlice";
import { formSubmited, formData, formDataIdProof, formImgStatus } from "../../reducers/formTypeSlice";
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
  const [makePayment] = useMakePaymentMutation();

  const dispatch = useDispatch();

  const currentUserId = useSelector((state) => state.user.current_user.id)
  const formType = useSelector((state) => state.formType.formType);
  const formDatas = useSelector((state) => state.formType.formData);

  const submitMembers = async (data) => {
    const datas = { ...data, userId: currentUserId, type: formType }
    try {
      await createMembers(datas)
        .unwrap()
        .then((res) => {
          const { user, ...rest } = res;
          dispatch(formSubmited(true));
          dispatch(formData(""));
          dispatch(formDataIdProof(""));
          dispatch(formImgStatus(false));
          dispatch(currentUser(user));
          handleStepClick(2);
        });
    } catch (error) {
      console.log("error");
    }
  }

  const makePaymentMethod = async (data) => {
    const datas = { ...data, userId: currentUserId, type: formType }
    const stripe = await loadStripe('pk_test_51OWvGSSDcWKAz6oIiMvnjQToKrOu7Pp4aHIKugWHpMTx4K19CajJQDPkx9RnQutL2QxS7cTPIL2yPfRrDefNZig600U6nDGFWZ');
    try {
      await makePayment(datas)
        .unwrap()
        .then((res) => {
          const sessionId = res.id;
          stripe.redirectToCheckout({
            sessionId: sessionId,
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
      {
        !isLoading ?
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
          :
          <div>
            <button
              className="flex w-full justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
  );
};

export default PayPremium;
