import { useState } from "react";
import PlayGameHeader from "./PlayGameHeader";
import RollDice from "./RollDice";
import Rules from "./Rules";

function PlayGame({ toggleStarter }) {
  const [rolledNumber, setRolledNumber] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [score, setScore] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const checkResult = () => {
    setSelectedNumber();
    if (rolledNumber === selectedNumber) {
      setScore(score + selectedNumber);
    } else {
      setScore(score - 1);
    }
  };
  return (
    <div className="w-full h-full">
      <PlayGameHeader
        score={score}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        isReady={isReady}
        setIsReady={setIsReady}
      />
      <RollDice
        rolledNumber={rolledNumber}
        setRolledNumber={setRolledNumber}
        checkResult={checkResult}
        setScore={setScore}
        isReady={isReady}
        setIsReady={setIsReady}
        setShowRules={setShowRules}
      />
      <Rules showRules={showRules} setShowRules={setShowRules} />

      <button
        className="fixed bottom-4 left-6 text-base  px-8 py-1 font-semibold cursor-pointer transition-all duration-100 active:bg-black active:text-white "
        onClick={toggleStarter}
      >
        Go to home
      </button>
    </div>
  );
}

export default PlayGame;
