import React from "react";

const ServiceCard = ({ image, content, contentBold }) => {
  return (
    <div>
      <button>
        <figure className="relative">
          <div>
            <img
              className="object-cover object-center w-full h-full"
              src={image}
              alt=" image"
            />
            <div>
              <figcaption className="absolute left-5 bottom-7 p-7 max-lg:p-5   text-center  bg-white rounded-full py-2  shadow-lg shadow-black/5 saturate-200 max-sm:p-3  ">
                <p className="font-sans text-base antialiased font-normal  text-gray-700">
                  {content}
                </p>
                <h5 className="font-sans  antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {contentBold}
                </h5>
              </figcaption>
            </div>
          </div>
        </figure>
      </button>
    </div>
  );
};

export default ServiceCard;
