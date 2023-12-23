import image1 from "../../assets/image 17.png";

function ClientImage() {
  return (
    <div className="container mx-auto">
      <div className="mx-10 h-screen">
        <div className="flex py-10 flex-row justify-between gap-7">
          <p className="text-black text-2xl font-medium">Appoinments</p>
          <div className=" flex ">
            <select
              className="ml-10 block ml-4 w-full rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2  sm:text-sm sm:leading-6"
              defaultValue="Today"
            >
              <option>Today</option>
              <option>Tomorrow</option>
            </select>
          </div>
        </div>
        <div className="rounded-lg border flex flex-col items-center">
          <div className="bg-white   flex flex-col items-center py-10   gap-5">
            <img src={image1} className="h-72 w-96" alt="image" />
          </div>
          <h1 className="text-3xl">Your clients are viewing your profile</h1>
          <p className="text-sm mb-10">
            Your Dashboard is currently empty. Explore platform features and
            manage your profile as you kickstart your journey with us
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClientImage;
