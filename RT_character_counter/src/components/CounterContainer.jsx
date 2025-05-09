import React, { useEffect, useState } from "react";
import TextArea from "./TextArea";
import Counter from "./Counter";
import Header from "./Header";

function CounterContainer() {
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [maxCharacters, setMaxCharacters] = useState(0);

  useEffect(() => {
    const max = prompt("Enter the max number of characters. ( Default = 50 )");
    if (max) {
      if (!isNaN(max)) {
        setMaxCharacters(parseInt(max));
      } else {
        alert("You have not entered a number.( Max = 50 )");
      }
    }

    return () => {
      setMaxCharacters(50);
    };
  }, []);

  return (
    <div className="bg-zinc-900 p-4 rounded-lg">
      <Header />
      <TextArea
        totalCharacters={totalCharacters}
        setTotalCharacters={setTotalCharacters}
        maxCharacters={maxCharacters}
      />
      <Counter
        totalCharacters={totalCharacters}
        maxCharacters={maxCharacters}
      />
      <button
        onClick={() => {
          window.location.reload();
        }}
        className="px-4 py-1  cursor-pointer bg-zinc-800 rounded-lg"
      >
        Reset
      </button>
    </div>
  );
}

export default CounterContainer;
