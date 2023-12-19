import { FaArrowCircleRight } from "react-icons/fa";

const ServiceCardTwo = ({ image, content, contentBold }) => {
  return (
    <div>
      <button>
        <figure className="relative w-full h-90 ">
          <img
            className="object-cover object-center w-full h-full rounded-xl "
            src={image}
            alt=" image"
          />
          <figcaption className="absolute bottom-4 left-2/4 w-10/12  -translate-x-2/4   text-center border border-white bg-white rounded-full py-2  shadow-lg shadow-black/5 saturate-200 ">
            <div className="flex justify-around gap-2 items-center ">
              <div>
                <h5 className="block font-sans text-xl text-start antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {content}
                </h5>
                <p className=" mt-2 font-sans text-start antialiased font-normal  text-gray-700">
                  {contentBold}
                </p>
              </div>
              <div>
                <FaArrowCircleRight className="w-10 h-10" />
              </div>
            </div>
          </figcaption>
        </figure>
      </button>
    </div>
  );
};

export default ServiceCardTwo;
