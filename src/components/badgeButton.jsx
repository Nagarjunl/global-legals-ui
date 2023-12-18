import { FaCircleArrowRight } from "react-icons/fa6";
import imageCom from "../assets/New_folder/image14.svg";

const BadgeButton = ({ titleOne, titlTwo, image }) => {
  return (
    <>
      <div>
        <button>
          <figure class="relative w-full h-90">
            <img
              class="object-cover object-center w-full h-full "
              src={image}
              alt=" image"
            />
            <figcaption class="absolute bottom-6 left-2/4 px-0  w-[calc(100%-4rem)] -translate-x-2/4   text-center border border-white bg-white rounded-full py-3  shadow-lg shadow-black/5 saturate-200 ">
              <p class=" mt-2 font-sans text-base antialiased font-normal  text-gray-700">
                {titlTwo}
              </p>

              <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {titleOne}
              </h5>
            </figcaption>
          </figure>
        </button>
      </div>
    </>
  );
};

export default BadgeButton;
