// eslint-disable-next-line react/prop-types
const Input = ({ id, name, type, placeholder, autoComplete }) => {
  return (
    <div className="mt-2">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-blue-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
};
export default Input;
