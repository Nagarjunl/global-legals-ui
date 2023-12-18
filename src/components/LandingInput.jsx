import React from "react";

const LandingInput = () => {
  return (
    <>
      <div
        class="flex  items-center max-w-full mx-full h-10 w-auto "
        x-data="{ search: '' }"
      >
        <div class="w-full">
          <input
            type="search"
            class="w-full "
            placeholder="search"
            x-model="search"
          />
        </div>
        <div>
          <button
            type="submit"
            class="flex items-center bg-[#00C26B] justify-center w-12 h-10 text-white"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingInput;
