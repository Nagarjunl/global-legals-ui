import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
const BlockText = ({ heading, content }) => {
  return (
    <div className="pt-5">
      <div className="flex gap-1 text-start">
        <FaRegCheckCircle className="h-[28px] w-[28px] text-gray-600" />
        <p className="text-black text-xl font-bold self-stretch grow shrink basis-auto max-md:max-w-full">
          {heading}
        </p>
      </div>
      <p className="text-gray-600 font-circular-std text-base font-normal font-hairline leading-normal">
        {content}
      </p>
    </div>
  );
};

export default BlockText;
