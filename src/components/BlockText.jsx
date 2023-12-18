import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
const BlockText = ({ heading, content }) => {
  return (
    <>
      <div className="flex gap-3 text-start">
        <FaRegCheckCircle className="h-[28px] w-[28px] text-gray-600" />
        <p className="text-black text-xl font-bold self-stretch grow shrink basis-auto max-md:max-w-full">
          {heading}
        </p>

        <p className="text-trueGray-600 mt-2 font-semibold font-circular-std text-base  font-hairline leading-normal">
          {content}
        </p>
      </div>
    </>
  );
};

export default BlockText;
