import Asset from "../assets/pay.jpg";

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
const PayPremium = () => {
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
        presence. <br /> We're excited to offer you an exclusive premium
        membership that comes <br /> with unparalleled benefits tailored to
        boost your legal practice.
      </div>
      <div className="text-center pt-16 text-2xl">Why Go Premium?</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-3">
        {people.map((person, index) => (
          <div
            className="bg-white p-4 rounded-md border border-solid border-white-200"
            key={index}
          >
            <h2 className="font-semibold mb-2 text-base text-center">
              {person.name}
            </h2>
            <p className="text-gray-600 text-xs">{person.title} </p>
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
      <div className="flex justify-center items-center mt-4">
        <button
          type="button"
          className="rounded bg-blue-600 w-96 h-10  px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Proceed to pay $10
        </button>
      </div>
    </div>
  );
};

export default PayPremium;
