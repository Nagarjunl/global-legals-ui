import React from "react";

const Card = ({ image }) => {
  return (
    <>
      <div className="max-w-lg mx-auto">
        <div className="bg-white shadow-md border border-gray-200  max-w-sm mb-5">
          <img className="image" src={image} alt="image" />
          <span className="mt-2 flex items-start flex-col rounded-full w-64 bg-white py-5 px-4 text-xs font-medium circular_font_family ">
            <p className="text-black items-center text-base  circular_font_family ">
              Your Advocate Professionals
            </p>
            <p className="font-extrabold">Legal Excellence</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
