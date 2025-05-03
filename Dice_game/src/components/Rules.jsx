function Rules({ showRules, setShowRules }) {
  if (showRules) {
    return (
      <div className="rules w-full py-6 flex justify-center items-center">
        <div className="p-4 bg-pink-100 w-fit">
          <h1 className="text-base font-bold mb-4">How to play dice game</h1>
          <p className="text-sm font-medium">Select any number</p>
          <p className="text-sm font-medium">Click on dice image</p>
          <p className="text-sm font-medium">
            After click on dice if selected number is equal to dice number you
            will get same point as dice
          </p>
          <p className="text-sm font-medium">
            If you get wrong guess then 1 point will be deducted
          </p>
        </div>
      </div>
    );
  }
}

export default Rules;
