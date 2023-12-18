import Server from "../assets/server.jpg";
function ServerImage() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-start pt-4">
          <img src={Server} alt="Your Image" className="block mx-auto" />
        </div>
        <h2 className="text-center pt-3 text-2xl">Internal Server Error</h2>
        <p className="text-center pt-3 text-sm">
          We&lsquo;re experiencing technical difficulties. Our team is actively
          working to resolve the issue. We <br /> apologize for any
          inconvenience. Please try again later, and thank you for your
          patience.
        </p>
      </div>
    </>
  );
}

export default ServerImage;
