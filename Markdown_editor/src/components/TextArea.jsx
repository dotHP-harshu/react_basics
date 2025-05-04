import React, { useContext } from "react";
import MarkdownText from "../contexts/MarkdownText";

function TextArea() {
  const { markdown, setMarkdown } = useContext(MarkdownText);
  return (
    <div id="editor-container">
      <h1 className="container-heading">Write markdown here:</h1>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        id="editor"
      ></textarea>
    </div>
  );
}

export default TextArea;
