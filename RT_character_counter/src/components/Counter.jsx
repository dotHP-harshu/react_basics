import React, { useState } from "react";

function Counter({ totalCharacters, maxCharacters }) {
  return (
    <div className="p-3 ">
      <p
        className={`${
          totalCharacters >= maxCharacters ? "text-green-500" : "text-white"
        } text-base tracking-wide`}
      >
        Characters : {totalCharacters}
      </p>
      <p className="text-base tracking-wide ">
        Max Characters : {maxCharacters}
      </p>
      <p
        className={`${
          totalCharacters >= maxCharacters ? "text-red-500" : "text-white"
        } text-base tracking-wide`}
      >
        Remaining Characters : {maxCharacters - totalCharacters}
      </p>
    </div>
  );
}

export default Counter;
