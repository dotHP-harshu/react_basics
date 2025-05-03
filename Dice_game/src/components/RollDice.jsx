function RollDice({
  rolledNumber,
  setRolledNumber,
  checkResult,
  setScore,
  isReady,
  setIsReady,
  setShowRules,
}) {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  const rollDice = () => {
    if (isReady) {
      setRolledNumber(getRandomNumber());
      checkResult();
      setIsReady(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center ">
      <div
        className="cursor-pointer p-1 border-2 rounded-xl"
        onClick={rollDice}
      >
        <img
          src={`/images/dice_${rolledNumber}.png`}
          alt="dice_1"
          className="h-20 w-20 object-center"
        />
      </div>
      <p className="text-base font-semibold tracking-tight">
        Click on dice to roll
      </p>
      <button
        onClick={() => {
          setScore(0);
        }}
        className="border-2 w-50 cursor-pointer py-1 rounded-lg transition duration-100 bg-white text-black active:bg-black active:text-white border-black"
      >
        Restore Score
      </button>
      <button
        onClick={() => {
          setShowRules((prev) => !prev);
        }}
        className="border-2 w-50 cursor-pointer py-1 rounded-lg transition duration-100  bg-black text-white active:bg-white active:text-black border-black"
      >
        Show Rules
      </button>
    </div>
  );
}

export default RollDice;
