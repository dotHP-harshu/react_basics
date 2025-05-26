import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function LeftHome({ setIsShowingRightHome }) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <h1 className="lg:text-4xl max-sm:text-2xl font-bold text-center">
        Word to Number converter
      </h1>
      <p className="lg:text-lg max-sm:text-base text-center w-3/4 max-sm:w-full">
        This is a fun little tool to convert words into numbers — and in the
        process, I learned a lot about logic and structure in coding.
      </p>
      <hr className="w-full text-gray-500" />
      <p className="lg:text-base max-sm:text-sm text-center font-light text-gray-700">
        Click <strong>arrow</strong> button for changing sections, input the
        word into the input box and click on <strong>Convert</strong>
      </p>
      <button
        onClick={() => {
          setIsShowingRightHome(true);
        }}
        className="active:scale-95 border-none outline-none text-base w-10 h-10 flex items-center justify-center bg-[#233838] text-center text-white rounded-full cursor-pointer"
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
}

export default LeftHome;
