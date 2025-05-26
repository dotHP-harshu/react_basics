import React, { useState } from "react";
import convertIntoNumber, {
  doubleUnit,
  multiplier,
  singleUnit,
} from "../utils/convertIntoNumber";
import { FaArrowLeftLong } from "react-icons/fa6";

function RightHome({ setIsShowingRightHome }) {
  const handelInputWordString = () => {
    if (wordString === "") {
      return setError("Input box can not be empty.");
    }
    setError("");

    let result = convertIntoNumber(wordString);
    if (result.status === 200) {
      setNumber(result.Number);
    } else if (result.status === 400) {
      setError(result.error);
    }

    setWordString("");
  };

  const [wordString, setWordString] = useState("");
  const [error, setError] = useState("");
  const [Number, setNumber] = useState(101);

  return (
    <div className="w-full flex gap-4 flex-col items-center justify-center h-full">
      <h1
        className={`${
          error !== "" && "text-red-600 text-lg font-normal"
        } text-3xl max-sm:text-lg font-bold text-center`}
      >
        {error === "" ? Number : error}
      </h1>
      <input
        list="numbers"
        autoFocus={setIsShowingRightHome}
        value={wordString}
        onChange={(e) => setWordString(e.target.value)}
        type="text"
        placeholder="One hundred two"
        className={`${
          error !== "" && "border-red-600 "
        } max-sm:w-full w-3/4 px-2 py-1 rounded-lg border-2 border-[#233838] max-sm:text-base `}
      />

      <button
        onClick={handelInputWordString}
        className=" active:scale-95 border-2 max-sm:text-sm border-[#233838] px-4 py-1 rounded-lg text-base transition-colors duration-300 cursor-pointer hover:bg-[#233838] hover:text-white"
      >
        Convert
      </button>

      <button
        onClick={() => {
          setIsShowingRightHome(false);
        }}
        className="active:scale-95 border-none absolute top-10 left-10 outline-none text-base w-10 h-10 flex items-center justify-center bg-[#233838] text-center text-white rounded-full cursor-pointer"
      >
        <FaArrowLeftLong />
      </button>
    </div>
  );
}

export default RightHome;
