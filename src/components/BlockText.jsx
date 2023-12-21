import { FaRegCheckCircle } from "react-icons/fa";
const BlockText = ({ heading, content }) => {
  return (
    <>
      <div className="grid items-end mt-10">
        <div className="flex gap-2 max-md:text-start">
          <FaRegCheckCircle className="h-[28px] w-[28px] text-gray-600" />
          <p className="  text-xl font-bold  grow shrink basis-auto max-md:max-w-full">
            {heading}
          </p>
        </div>
        <div className="pr-36 mt-2 max-md:pr-2">
          <p className="text-trueGray-600  font-circular-std text-base font-hairline ">
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlockText;
