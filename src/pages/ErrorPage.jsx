import Error from "../assets/error.jpg";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={Error} alt="" className="mb-3" />

      <div className="text-center pt-3 text-xl md:text-2xl lg:text-3xl">
        <h1>Sorry, we couldn’t find any results in </h1>
        <h1 className="text-black-900 mt-2 md:text-4xl lg:text-5xl">
          “India, USA”
        </h1>
      </div>

      <p className="text-center text-lg mt-5">
        Make sure to check the spelling or try searching using the following
        instead:
      </p>

      <ul className="text-black-500 list-disc list-inside mt-3 text-sm md:text-base lg:text-lg max-w-screen-md">
        <li>Search your city or state</li>
        <li>Search for your legal problem</li>
      </ul>
    </div>
  );
}

export default ErrorPage;
