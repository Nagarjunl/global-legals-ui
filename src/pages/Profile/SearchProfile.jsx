import { useEffect, useState } from "react";
import { useGetMembersQuery, useSearchMembersQuery } from "../../services/userAPI";
import { useSelector, useDispatch } from 'react-redux';

import LawyerCard from "../../components/LawyerCard";
import cupImage from "../../assets/image25.svg";
import Select from "../../components/Select";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const badgeData = [
  {
    badge: "Labour and Employment",
  },
  {
    badge: "India, USA",
  },
];

const people = [
  { id: 1, type: "people", value: 'Lawyers' },
  { id: 2, type: "people", value: 'BondBailsman' },
  { id: 3, type: "people", value: 'Security' },
  { id: 4, type: "people", value: 'PrivateInvestigators' },
]

const states = [
  { id: 1, type: "location", value: "Alaska" },
  { id: 2, type: "location", value: "Arizona" },
  { id: 3, type: "location", value: "Arkansas" },
  { id: 4, type: "location", value: "California" },
  { id: 5, type: "location", value: "Colorado" },
]

const ratings = [
  { id: 1, type: "ratings", value: 1 },
  { id: 2, type: "ratings", value: 2 },
  { id: 3, type: "ratings", value: 3 },
  { id: 4, type: "ratings", value: 4 },
  { id: 5, type: "ratings", value: 5 },
]

function SearchProfile() {

  const [memberId, setMemberId] = useState();
  const navigate = useNavigate();
  const searchData = useSelector((state) => state.search);
  const [searchParams, setSearchParams] = useState();

  // console.log(searchData);
  // const { data: members, isLoading: fetchingMembers } = useGetMembersQuery();

  const { data: members, isLoading: fetchingMembers } = useSearchMembersQuery(searchParams, {
    skip: searchParams === undefined,
  });

  useEffect(() => {
    setSearchParams(searchData)
  }, [searchData]);

  return (
    <div className="mx-auto container max-sm:px-6 lg:px-[120px] pb-3">
      <div>
        <div className="mt-10 grid xs:grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <Select selectData={people} />
          </div>
          <div>
            <Select selectData={states} />
          </div>
          <div>
            <Select selectData={ratings} />
          </div>

        </div>
        <div className=" flex flex-wrap mt-4 gap-4 align-text-center">
          <h2 className=" sm:text-lg"> Applied Filters</h2>
          {badgeData.map((badges, index) => (
            <span
              className="inline-flex items-center gap-x-0.5 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-blue-600  ring-gray-500/10"
              key={index}
            >
              {badges.badge}
              <button
                type="button"
                className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20"
              >
                <span className="sr-only">Remove</span>
                <svg
                  viewBox="0 0 14 14"
                  className="h-4 w-4.5 stroke-gray-600/50 group-hover:stroke-gray-600/75"
                >
                  <IoIosCloseCircleOutline className="text-gray-500" />
                </svg>
                <span className="absolute -inset-1" />
              </button>
            </span>
          ))}
        </div>
        <div className="w-full  mt-10">
          <h2 className=" text-[30px]">
            There are 13 Attorneys in Indiana, USA
          </h2>
        </div>
        <div>
          {!fetchingMembers ?
            members?.map((data, index) =>
            (
              <Link key={index}
                to={{
                  pathname: `/profileDetails/${data.id}`,
                }}
              >
                <LawyerCard
                  image={data.idProof}
                  fName={data.clientName}
                  cups={cupImage}
                  topRated="Top Rated  Attorney"
                  selfIntro={data.professional}
                  pratcingAt={data.practicingLaw}
                  designation={data.legalSpecialization}
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
