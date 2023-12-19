export default function TextArea() {
  return (
    <div>
      <div className="mt-2">
        <textarea
          placeholder="Write a short enquiry details"
          rows={4}
          name="comment"
          id="comment"
          className="block w-full rounded-md border-0 pl-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
          defaultValue={""}
        />
      </div>
    </div>
  );
}
