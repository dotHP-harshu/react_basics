function Starter({ toggleStarter }) {
  return (
    <div className="w-full flex items-center justify-center h-full">
      <div className="left w-1/2 h-full flex justify-center items-center">
        <img
          src="/images/dices.png"
          alt="dices"
          className="w-3/4 h-auto object-center"
        />
      </div>
      <div className="right w-1/2 h-full gap-6 flex flex-col justify-center items-start">
        <h1 className="text-8xl font-extrabold tracking-tighter">Dice Game</h1>
        <button
          className="text-base bg-black border-2 px-8 py-1 text-white font-semibold cursor-pointer transition-all duration-500 hover:bg-white hover:text-black "
          onClick={toggleStarter}
        >
          Play now
        </button>
      </div>
    </div>
  );
}

export default Starter;
