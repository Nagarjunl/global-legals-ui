import { useEffect, useState } from "react";
import { useSearchMembersQuery } from "../../services/userAPI";
import { useDispatch, useSelector } from 'react-redux';

import LawyerCard from "../../components/LawyerCard";
import cupImage from "../../assets/image25.svg";
import Select from "../../components/Select";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { setPeople, setLocation } from "../../reducers/searchSlice";


const people = [
  { id: 1, type: "people", value: 'Lawyers' },
  { id: 2, type: "people", value: 'BondBailsman' },
  { id: 3, type: "people", value: 'Security' },
  { id: 4, type: "people", value: 'PrivateInvestigators' },
]

const states = [
  { id: 1, type: "location", value: "Alabama" },
  { id: 2, type: "location", value: "Alaska" },
  { id: 3, type: "location", value: "Arizona" },
  { id: 4, type: "location", value: "Arkansas" },
  { id: 5, type: "location", value: "California" },
  { id: 6, type: "location", value: "Colorado" },
  { id: 7, type: "location", value: "Connecticut" },
  { id: 8, type: "location", value: "Delaware" },
  { id: 9, type: "location", value: "District Of Columbia" },
  { id: 10, type: "location", value: "Florida" },
  { id: 11, type: "location", value: "Georgia" },
  { id: 12, type: "location", value: "Hawaii" },
  { id: 13, type: "location", value: "Idaho" },
  { id: 14, type: "location", value: "Illinois" },
  { id: 15, type: "location", value: "Indiana" },
  { id: 16, type: "location", value: "Iowa" },
  { id: 17, type: "location", value: "Kansas" },
  { id: 18, type: "location", value: "Kentucky" },
  { id: 19, type: "location", value: "Louisiana" },
  { id: 20, type: "location", value: "Maine" },
  { id: 21, type: "location", value: "Maryland" },
  { id: 22, type: "location", value: "Massachusetts" },
  { id: 23, type: "location", value: "Michigan" },
  { id: 24, type: "location", value: "Minnesota" },
  { id: 25, type: "location", value: "Mississippi" },
  { id: 26, type: "location", value: "Missouri" },
  { id: 27, type: "location", value: "Montana" },
  { id: 28, type: "location", value: "Nebraska" },
  { id: 29, type: "location", value: "Nevada" },
  { id: 30, type: "location", value: "New Hampshire" },
  { id: 31, type: "location", value: "New Jersey" },
  { id: 32, type: "location", value: "New Mexico" },
  { id: 33, type: "location", value: "New York" },
  { id: 34, type: "location", value: "North Carolina" },
  { id: 35, type: "location", value: "North Dakota" },
  { id: 36, type: "location", value: "Ohio" },
  { id: 37, type: "location", value: "Oklahoma" },
  { id: 38, type: "location", value: "Oregon" },
  { id: 39, type: "location", value: "Pennsylvania" },
  { id: 40, type: "location", value: "Rhode Island" },
  { id: 41, type: "location", value: "South Carolina" },
  { id: 42, type: "location", value: "South Dakota" },
  { id: 43, type: "location", value: "Tennessee" },
  { id: 44, type: "location", value: "Texas" },
  { id: 45, type: "location", value: "Utah" },
  { id: 46, type: "location", value: "Vermont" },
  { id: 47, type: "location", value: "Virginia" },
  { id: 48, type: "location", value: "Washington" },
  { id: 49, type: "location", value: "West Virginia" },
  { id: 50, type: "location", value: "Wisconsin" },
  { id: 51, type: "location", value: "Wyoming" },
]

const ratings = [
  { id: 1, type: "ratings", value: 1 },
  { id: 2, type: "ratings", value: 2 },
  { id: 3, type: "ratings", value: 3 },
  { id: 4, type: "ratings", value: 4 },
  { id: 5, type: "ratings", value: 5 },
]

function SearchProfile() {
  const { searchKeys } = useParams();
  const dispatch = useDispatch();

  const searchData = useSelector((state) => state.search);
  const [searchParams, setSearchParams] = useState();

  const { data: members, isLoading: fetchingMembers } = useSearchMembersQuery(searchParams, {
    skip: searchParams === undefined,
  });

  const [searchTag, setsearchTag] = useState();

  useEffect(() => {
    const people = searchData?.people?.value === undefined ? "" : searchData?.people?.value;
    const location = searchData?.location?.value === undefined ? "" : searchData?.location?.value;
    const searchParam = `${people} ${location}`;

    if (searchData?.people?.value === undefined && searchData?.location?.value === undefined) {
      console.log("true");
      setSearchParams("true");
    } else {
      console.log("false");
      setSearchParams(searchParam);
    }
  }, [searchData, setSearchParams]);

  useEffect(() => {
    if (searchKeys === undefined) {
      setSearchParams("true");
    } else {
      setSearchParams(searchKeys);
    }
  }, [searchKeys]);

  useEffect(() => {
    setsearchTag(searchData);
  }, [searchTag, searchData, setsearchTag]);


  return (
    <div className="mx-auto container max-sm:px-6 lg:px-[120px] pb-3">
      <div>
        <div className="mt-10 grid xs:grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Select selectData={people} initialValue={searchData?.people} />
          </div>
          <div>
            <Select selectData={states} initialValue={searchData?.location} />
          </div>

        </div>
        <div className=" flex flex-wrap mt-4 gap-4 align-text-center">
          <h2 className=" sm:text-lg"> Applied Filters</h2>
          {searchTag?.people !== "" &&
            <span
              className="inline-flex items-center gap-x-0.5 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-blue-600  ring-gray-500/10"
            >
              {searchTag?.people?.value}
              <button
                type="button"
                className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20"
                onClick={() => dispatch(setPeople(""))}

              >
                <span className="sr-only">Remove</span>
                <svg
                  viewBox="0 0 14 14"
                  className="h-4 w-4.5 stroke-gray-600/50 group-hover:stroke-gray-600/75"
                >
                  <IoIosCloseCircleOutline
                    className="text-gray-500"
                  />                </svg>
                <span className="absolute -inset-1" />
              </button>
            </span>
          }
          {searchTag?.location !== "" &&
            <span
              className="inline-flex items-center gap-x-0.5 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-blue-600  ring-gray-500/10"
            >
              {searchTag?.location?.value}
              <button
                type="button"
                className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20"
                onClick={() => dispatch(setLocation(""))}
              >
                <span className="sr-only">Remove</span>
                <svg
                  viewBox="0 0 14 14"
                  className="h-4 w-4.5 stroke-gray-600/50 group-hover:stroke-gray-600/75"
                >
                  <IoIosCloseCircleOutline
                    className="text-gray-500"

                  />
                </svg>
                <span className="absolute -inset-1" />
              </button>
            </span>
          }
        </div>
        <div className="w-full  mt-10">
          <h2 className=" text-[30px]">
            Search Result
          </h2>
        </div>
        <div>
          {!fetchingMembers ?
            members?.map((data, index) => (
              <Link key={index}
                to={{
                  pathname: data.id !== undefined ?
                    `/profileDetails/${data?.id}` :
                    `/profileDetails/${data?._id.$oid}`,
                }}
              >
                <LawyerCard
                  image={data.idProof}
                  fName={data.clientName}
                  email={data.email}
                  type={data.type}
                  cups={cupImage}
                  topRated="Top Rated Attorney"
                  designation={
                    data.type === "Lawyers" ? data.practicingLaw :
                      data.type === "BondBailsman" ? data.licenseNumber :
                        data.type === "PrivateInvestigators" ? data.licenseNumber : data.licenseNumber
                  }
                  selfIntro={data.professional}
                />
              </Link>
            )
            )
            : null
          }
        </div>
      </div>
    </div >
  );
}

export default SearchProfile;
