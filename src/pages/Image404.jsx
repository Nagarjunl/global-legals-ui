import React from "react";
import Asset from "../assets/Asset 404.jpg";

function Image404() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-start pt-4">
        <img src={Asset} alt="Your Image" className="block mx-auto" />
      </div>
      <h2 className="text-center pt-3 text-3xl">
      Looks like you took a wrong turn
      </h2>
      <p className="text-center pt-3 text-sm">
      The page you're looking for might be under construction or has moved elsewhere. Please check the URL or return to the homepage.
      </p>
      </div>  );
}

export default Image404;
