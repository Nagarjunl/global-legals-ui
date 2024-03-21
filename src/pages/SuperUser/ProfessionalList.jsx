import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Select from 'react-select';
import ReactPaginate from 'react-paginate';

import { FaEye, FaUndoAlt } from "react-icons/fa";
// import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import { useLazyProfessionalReportQuery } from "../../services/userAPI";
import { setKeyword, setProfession } from '../../reducers/searchSlice';
import { addProfileUser } from "../../reducers/profileSlice";

import { professionals } from "../../constants/constants";
import Dialogue from "../../components/Dialogue";
import ProfessionalDetails from "./ProfessionalDetails";


const ProfessionalList = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const profession = "";
  const keyword = "";

  const [limit] = useState(50);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const [openStatus, setOpenStatus] = useState(false);

  const proState = useSelector((state) => state.search.profession);
  const keyState = useSelector((state) => state.search.keyword);

  const [trigger, { data, isLoading }] = useLazyProfessionalReportQuery({ limit, offset, profession, keyword }, {
    skip: limit === 0 && offset === 0
  });

  const viewIndividual = (data) => {
    dispatch(addProfileUser(data));
    navigate("/admin/indProfessional")
  }

  const undoVerify = (data) => {
    dispatch(addProfileUser(data));
    setOpenStatus(!openStatus)
  }

  const handlePageClick = (event) => {
    const newOffset = (event.selected * limit) % data?.count;
    setOffset(newOffset);
  };

  const handleSelectChange = (value) => {
    dispatch(setProfession(value));
    setOffset(0);
  }

  const inputChange = (value) => {
    dispatch(setKeyword(value));
    setOffset(0);
  }

  useEffect(() => {
    const profession = proState === null ? undefined : proState.value;
    const keyword = keyState === "" ? undefined : keyState;
    trigger({ limit, offset, profession, keyword })

  }, [trigger, limit, offset, proState, keyState])

  useEffect(() => {
    if (!isLoading) {
      const count = data === undefined ? 0 : data.count;

      // If condition for set offset for when verify last member in last page of pagination
      if (count > 0 && data?.data?.length === 0) {
        const newOffset = count - limit
        setOffset(newOffset);
      } else {
        setPageCount(Math.ceil(count / limit));
      }
    }
  }, [limit, data, isLoading, setPageCount, setOffset])

  return (
    <div >
      <div className="grid xs:grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div >
          <h3 className="font-medium leading-[34.32px] text-[24px]">
            Professionals
          </h3>
        </div>

        <div className="sm:col-span-2">
          <div className="grid xs:grid-cols-1 sm:grid-cols-1 gap-4 justify-items-end">
            <Select
              defaultValue={proState || ""}
              onChange={handleSelectChange}
              options={professionals}
              className="border rounded-md w-full"
              isClearable={true}
              placeholder="Select Profession"
            />
            {/* <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full rounded-md border-0 py-[7px] pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter Name or State only"
                onChange={(e) => inputChange(e.target.value)}
              />
            </div> */}
          </div>
        </div>

      </div>

      <div className="flex items-center">
        <table className="w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Payment Status</th>
              <th className="py-2 px-4 border-b text-left">Verification Status</th>
              <th className="py-2 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && data?.data.length > 0 ?
              data?.data.map((data) => (
                <tr key={data.id}>
                  <td className="py-2 px-4 border-b">{data?.Members[0]?.clientName}</td>
                  <td className="py-2 px-4 border-b">{data?.email}</td>
                  <td className="py-2 px-4 border-b">{data?.Members[0]?.type}</td>
                  <td className="py-2 px-4 border-b">{data?.verify === true ? "true" : "false"}</td>

                  <td className="flex items-center justify-center py-2 px-4">
                    <div className="flex  gap-4">
                      {/* <button className="hover:text-primary">
                        <FaEdit className=" px-aspect-square object-contain object-center w-5 h-5 overflow-hidden shrink-0 max-w-full"
                          disabled={verifyingmember}
                          onClick={() => submitMember(data.id)}
                        />
                      </button> */}
                      <div
                        className="hover:text-primary cursor-pointer"
                        onClick={() => viewIndividual(data)}
                      >
                        <FaEye className="aspect-square object-contain object-center w-5 h-5 overflow-hidden shrink-0 max-w-full"
                        />
                      </div>
                      <button className="hover:text-primary"
                        onClick={() => undoVerify(data)}
                      >
                        <FaUndoAlt className="aspect-square object-contain object-center w-5 h-5 overflow-hidden shrink-0 max-w-full"
                        />
                      </button>
                    </div>
                  </td>

                </tr>
              ))

              :

              <tr>
                <td className="py-2 px-4 border-b text-center" colSpan={5}> No Records Found </td>
              </tr>

            }
          </tbody>
        </table>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 sm:items-center  sm:justify-end max-sm:justify-center">
            <ReactPaginate
              breakLabel="..."
              nextLabel=" > "
              onPageChange={handlePageClick}
              pageRangeDisplayed={4}
              pageCount={pageCount}
              previousLabel=" < "
              renderOnZeroPageCount={null}

              containerClassName="isolate inline-flex -space-x-px rounded-md shadow-sm"
              previousLinkClassName="relative inline-flex items-center text-sm rounded-l-md px-4 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              nextLinkClassName="relative inline-flex items-center text-sm rounded-r-md px-4 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              pageLinkClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0"
              breakLinkClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              activeLinkClassName="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />
          </div>
        </div>
      </div>


      <div className="relative">
        <Dialogue
          title="Undo Professional Verification Status"
          message={<ProfessionalDetails open={openStatus} setOpen={setOpenStatus} btnLabel="Unverify" />}
          btnText="Verify"
          setOpenStatus={setOpenStatus}
          openStatus={openStatus}
          hideButtons={true}
        />
      </div >

    </div >
  );
};

export default ProfessionalList;
