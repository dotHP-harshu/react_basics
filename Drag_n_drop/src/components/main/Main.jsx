import React, { useEffect, useState } from "react";
import Note from "./Note";
import Bin from "./Bin";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MakeNotes from "./MakeNotes";

function Main() {
  const [notes, setNotes] = useState([]);
  const [bin, setBin] = useState([]);

  const updateNotes = () => {
    let updatedNotes = notes.filter((note) => !bin.includes(note));
    setNotes(updatedNotes);
  };
  useEffect(() => {
    updateNotes();
  }, [bin]);

  useEffect(() => {
    let savedBin = localStorage.getItem("Bin");
    if (!savedBin) return setBin([]);
    let binnedNotes = JSON.parse(savedBin);
    setBin(binnedNotes);
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full min-h-dvh bg-zinc-950 text-white">
        <MakeNotes setNotes={setNotes} />
        <div className="flex gap-4 p-4 flex-wrap">
          {notes.length == 0 ? (
            <h1>There is nothing.</h1>
          ) : (
            notes.map((note) => (
              <Note
                key={new Date().getTime() + Math.random()}
                note={note}
                setBin={setBin}
              />
            ))
          )}

          {}
        </div>
        <Bin bin={bin} />
      </div>
    </DndProvider>
  );
}

export default Main;
