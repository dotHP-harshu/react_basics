import { useState } from "react";

function PlayGameHeader({
  score,
  selectedNumber,
  setSelectedNumber,
  isReady,
  setIsReady,
}) {
  const numbersArr = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex justify-between items-center px-10 py-16">
      <div className="score">
        <h1 className="text-6xl font-bold">{score}</h1>
        <p className="text-base uppercase font-semibold">score</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        {!isReady && (
          <p className=" absolute top-4 right-6  text-base text-red-500">
            You have not selected any number.
          </p>
        )}
        <div className="flex gap-4">
          {numbersArr.map((value, i) => (
            <button
              onClick={() => {
                setSelectedNumber(value);
                setIsReady(true);
              }}
              key={i}
              className={`${
                value === selectedNumber
                  ? "text-white bg-black"
                  : "text-black bg-white"
              } w-16 h-16 font-semibold text-base border-2 cursor-pointer`}
            >
              {value}
            </button>
          ))}
        </div>
        <p className="font-semibold text-base tracking-tight ">Select Number</p>
      </div>
    </div>
  );
}

export default PlayGameHeader;
