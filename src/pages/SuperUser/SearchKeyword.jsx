import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const SearchKeyword = () => {
    return (
        <div >
            <div className="mb-6">
                <div className="sm:flex items-center justify-between">
                    <div >
                        <h3 className="font-medium leading-[34.32px] text-[24px]">
                            New Enrolled Professionals
                        </h3>
                    </div>

                    <div className="w-80 relative rounded-md shadow-sm max-sm:w-full max-sm:mt-3">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                            type="text"
                            className="block w-full rounded-md border-0 py-[7px] pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter Name or State only"
                        />
                    </div>

                </div>
            </div>

            <div className="flex items-center">
                <table className="w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-left">KeyWords</th>
                            <th className="py-2 px-4 border-b text-left">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Lawyers</td>
                            <td className="py-2 px-4 border-b">200</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">criminal awyers</td>
                            <td className="py-2 px-4 border-b">86</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default SearchKeyword;
