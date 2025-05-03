import { useState } from "react";
import Starter from "./components/Starter";
import PlayGame from "./components/PlayGame";

function App() {
  const [isShowingStarter, setIsShowingStarter] = useState(true);

  const toggleStarter = () => {
    setIsShowingStarter(!isShowingStarter);
  };

  return (
    <main className="w-full h-screen">
      {isShowingStarter ? (
        <Starter toggleStarter={toggleStarter} />
      ) : (
        <PlayGame toggleStarter={toggleStarter} />
      )}
    </main>
  );
}

export default App;
