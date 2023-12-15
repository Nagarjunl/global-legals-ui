import React from "react";

const ServiceCard = ({ image, content, contentBold }) => {
  return (
    <div>
      <button>
        <figure class="relative w-full h-90">
          <img
            class="object-cover object-center w-full h-full rounded-xl"
            src={image}
            alt=" image"
          />
          <figcaption class="absolute bottom-4 left-2/4  w-[calc(120%-4rem)] -translate-x-2/4   text-center border border-white bg-white rounded-full py-2  shadow-lg shadow-black/5 saturate-200 ">
            <div>
              <p class=" mt-2 font-sans text-base antialiased font-normal  text-gray-700">
                {content}
              </p>
            </div>

            <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {contentBold}
            </h5>
          </figcaption>
        </figure>
      </button>
    </div>
  );
};

export default ServiceCard;
