import PropTypes from 'prop-types';

const PrimaryButton = ({ buttonText, type, disabled, onClick }) => {
  return (
    <div>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className="flex w-full justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PrimaryButton;

PrimaryButton.propTypes = {
  buttonText: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}
