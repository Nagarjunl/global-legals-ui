import profileimg from "../assets/profile.png";
import trophy from "../assets/tropy.png";
import PrimaryButton from "../components/PrimaryButton";
const ProfileCard = () => {
  return (
    <div>
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className=" row-auto md:flex md:items-center px-4 py-5 sm:p-6">
          <img src={profileimg} />
          <div>
            <div>
              <h2> Bill Thompson Moreira</h2>
              <button className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-xs font-medium text-orange-500  ">
                <img src={trophy} />
                <span className="ml-2">Top Rated Attorney</span>
              </button>
            </div>
          </div>
          <div className=" m-5">
            <button
              type="button"
              className="rounded-md  w-full bg-white px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-gray-50"
            >
              Call via Phone
            </button>
            <PrimaryButton buttonText="Contact via mail" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
