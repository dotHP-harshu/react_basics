import React from "react";
import { useDrop } from "react-dnd";

function Bin({ bin }) {
  const [collectedProps, drop] = useDrop(() => ({
    accept: "note",
  }));
  return (
    <div className="bg-zinc-800 m-4 p-4 " ref={drop}>
      <h1 className=" mb-4 text-lg font-bold">Bin</h1>
      <div className="flex gap-4 flex-wrap">
        {bin.length == 0 ? (
          <h1>Bin is empty.</h1>
        ) : (
          bin.map((b, i) => (
            <div
              key={i}
              className="rounded-lg px-4 py-2 bg-rose-700 opacity-70"
            >
              {b}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Bin;
