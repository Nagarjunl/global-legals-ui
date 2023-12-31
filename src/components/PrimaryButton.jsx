const PrimaryButton = ({ buttonText, type, disabled }) => {
  return (
    <div>
      <button
        type={type}
        disabled={disabled}
        className="flex w-full justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PrimaryButton;
