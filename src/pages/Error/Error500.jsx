import Server from "../../assets/server.jpg";
function ServerImage() {
  return (
    <>
      <main className="flex-grow overflow-hidden">
        <div
          className="container mx-auto flex items-center justify-center"
          style={{ height: "80vh" }}
        >
          <div className="text-center">
            <img src={Server} alt="Your Image" className="block mx-auto" />
            <h2 className="pt-3 text-3xl">Internal Server Error</h2>
            <p className="pt-3 text-sm">
              We&lsquo;re experiencing technical difficulties. Our team is
              actively working to resolve the issue. We <br /> apologize for any
              inconvenience. Please try again later, and thank you for your
              patience.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default ServerImage;
