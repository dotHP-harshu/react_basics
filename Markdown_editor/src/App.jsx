import { useState, useContext } from "react";
import MarkdownText from "./contexts/MarkdownText";
import TextArea from "./components/TextArea";
import Preview from "./components/Preview";

function App() {
  const [markdown, setMarkdown] = useState(
    "# 📝 Markdown Editor Test\n\nWelcome to your **Markdown Editor**. Below is a sample document to help you test the features."
  );
  return (
    <MarkdownText.Provider value={{ markdown, setMarkdown }}>
      <div id="app">
        <TextArea />
        <Preview />
      </div>
    </MarkdownText.Provider>
  );
}

export default App;
