import React, { useState } from "react";

function MakeNotes({ setNotes }) {
  const [noteValue, setNoteValue] = useState("");

  return (
    <div className="p-4">
      <input
        value={noteValue}
        onChange={(e) => {
          setNoteValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            if (noteValue === "") {
              return;
            }
            setNotes((prev) => [...prev, noteValue]);
            setNoteValue("");
          }
        }}
        type="text"
        maxLength={50}
        placeholder="Hit 'Enter' to make a note. max Characters = 50"
        className="bg-zinc-700 text-white border-none outline-none px-4 w-80 py-2 rounded-lg"
      />
    </div>
  );
}

export default MakeNotes;
