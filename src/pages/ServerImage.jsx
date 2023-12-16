import React from "react";
import Server from "../assets/server.jpg";
function ServerImage() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <img src={Server} alt="" />
          <h1 className="text-center text-[28px]  text-3xl mt-5">
            Internal Server Error
          </h1>
          <p className="text-sm mt-5">
            We're experiencing technical difficulties. Our team is actively
            working to resolve the issue.<br></br> We apologize for any
            inconvenience. Please try again later, and thank you for your
            patience.
          </p>
        </div>
      </div>
    </>
  );
}

export default ServerImage;
