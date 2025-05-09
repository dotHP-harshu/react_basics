import React, { useEffect, useState } from "react";

function TextArea({ totalCharacters, setTotalCharacters, maxCharacters }) {
  const [text, setText] = useState("");

  useEffect(() => {
    setTotalCharacters(() => {
      return text.trim().length;
    });
  }, [text]);

  return (
    <div>
      <textarea
        maxLength={maxCharacters}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className={` ${
          totalCharacters < maxCharacters
            ? "border-transparent"
            : "border-red-600"
        } bg-zinc-700 border-2 min-w-96 rounded-lg p-2 resize-none outline-none`}
        id="text-area"
        rows={6}
        placeholder={`Please write something (Max = ${maxCharacters})`}
      ></textarea>
    </div>
  );
}

export default TextArea;
