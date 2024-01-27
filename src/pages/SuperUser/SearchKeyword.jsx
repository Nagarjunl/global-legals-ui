import Pagination from "../../components/pagination";

const SearchKeyword = () => {
    return (
        <div >
            <div className="mb-6">
                <div >
                    <h3 className="font-medium leading-[34.32px] text-[24px]">
                        Search Keywords
                    </h3>
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

            <div className="mt-6">
                <Pagination />
            </div>

        </div>
    );
};

export default SearchKeyword;
