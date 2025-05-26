import React, { useState } from "react";
import LeftHome from "./LeftHome";
import RightHome from "./RightHome";

function Home() {
  const [isShowingRightHome, setIsShowingRightHome] = useState(false);
  return (
    <div className="relative w-3/4 max-sm:w-full rounded-xl min-h-[75vh] lg:p-10 max-sm:p-4 flex max-sm:flex-col max-sm:gap-3 items-center justify-center bg-red-50">
      {!isShowingRightHome ? (
        <LeftHome setIsShowingRightHome={setIsShowingRightHome} />
      ) : (
        <RightHome setIsShowingRightHome={setIsShowingRightHome} />
      )}
    </div>
  );
}

export default Home;
