import React, { useEffect } from "react";
import { useDrag } from "react-dnd";

function Note({ note, setBin }) {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: "note",
    item: { name: note },
    end: (item, monitor) => {
      let result = monitor.getDropResult();
      if (item && result) {
        setBin((prev) => {
          let bin = [...prev, item.name];
          localStorage.setItem("Bin", JSON.stringify(bin));
          return bin;
        });
      }
    },
  }));

  return (
    <div ref={drag} className="rounded-lg bg-rose-700 px-4 py-2">
      {note}
    </div>
  );
}

export default Note;
