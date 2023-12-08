const Header = () => {
  return (
    <div className="border px-12 py-8 md:flex md:items-center md:justify-between bg-green-900 text-white">
      <div className="min-w-0 flex-1">
        <img />
        <h2 className="  text-white-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Global Legals
        </h2>
      </div>
      <div className="mt-4 flex md:ml-4 md:mt-0">
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Home
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Business Signup
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          FAQ
        </button>
      </div>
    </div>
  );
};

export default Header;
