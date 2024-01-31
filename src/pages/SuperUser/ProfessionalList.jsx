import { useState } from "react";
import { useUnverifiedUserQuery, useVerifyUserMutation } from "../../services/userAPI";
import Select from 'react-select';
import { professionals } from "../../constants/constants";
import { FaEdit, FaEye, FaUndoAlt } from "react-icons/fa";
import Pagination from "../../components/pagination";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";


const ProfessionalList = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const { data, isLoading } = useUnverifiedUserQuery();
  const [verifyUser, { isLoading: verifyingmember }] = useVerifyUserMutation();

  const submitMember = async (data) => {
    try {
      await verifyUser(data)
        .unwrap()
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <div >
      <div className="grid xs:grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div >
          <h3 className="font-medium leading-[34.32px] text-[24px]">
            Professionals
          </h3>
        </div>

        <div className="sm:col-span-2">
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={professionals}
              className="border rounded-md"
              isClearable={true}
              placeholder="Select Profession"
            />
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full rounded-md border-0 py-[7px] pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Name, State, Other"
              />
            </div>
          </div>
        </div>

      </div>

      <div className="flex items-center">
        <table className="w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Payment Status</th>
              <th className="py-2 px-4 border-b text-left">Verified</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
              <th className="py-2 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              data?.map((data) => (
                <tr key={data.id}>
                  <td className="py-2 px-4 border-b">{data?.email}</td>
                  <td className="py-2 px-4 border-b">Success</td>
                  <td className="py-2 px-4 border-b">{data?.verify === true ? "true" : "false"}</td>
                  <td className="py-2 px-4 border-b">{data?.status}</td>

                  <td className="flex items-center justify-center py-2 px-4">
                    <div className="flex  gap-4">
                      <button className="hover:text-primary">
                        <FaEdit className=" px-aspect-square object-contain object-center w-5 h-5 overflow-hidden shrink-0 max-w-full"
                          disabled={verifyingmember}
                          onClick={() => submitMember(data)}
                        />
                      </button>
                      <Link
                        className="hover:text-primary"
                        to={"/admin/indProfessional"}>
                        <FaEye className="aspect-square object-contain object-center w-5 h-5 overflow-hidden shrink-0 max-w-full"
                        />
                      </Link>
                      <button className="hover:text-primary">
                        <FaUndoAlt className="aspect-square object-contain object-center w-5 h-5 overflow-hidden shrink-0 max-w-full"
                        />
                      </button>
                    </div>

                  </td>
                </tr>

              ))
            }
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <Pagination />
      </div>

    </div>
  );
};

export default ProfessionalList;
