import React, { useContext } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkdownText from "../contexts/MarkdownText";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Preview() {
  const { markdown, setMarkdown } = useContext(MarkdownText);
  return (
    <div id="preview-container">
      <h1 className="container-heading">Live preview:</h1>
      <div id="preview" className="w-1/2 h-auto min-h-full">
        <Markdown
          remarkPlugins={[remarkGfm]}
          children={markdown}
          components={{
            a(props) {
              const { node, ...rest } = props;
              return <a style={{ color: "skyblue" }} {...rest} />;
            },
            td(props) {
              const { node, ...rest } = props;
              return (
                <td
                  style={{ border: "1px solid white", padding: " 0.5rem" }}
                  {...rest}
                />
              );
            },
            th(props) {
              const { node, ...rest } = props;
              return (
                <th
                  style={{ border: "1px solid white", padding: " 0.5rem" }}
                  {...rest}
                />
              );
            },
            table(props) {
              const { node, ...rest } = props;
              return (
                <table
                  style={{
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    width: "fit-content",
                  }}
                  {...rest}
                />
              );
            },
            blockquote(props) {
              const { node, ...rest } = props;
              return (
                <blockquote
                  style={{
                    backgroundColor: "#767676",
                    padding: "1rem",
                    borderLeft: "1rem solid #575757",
                  }}
                  {...rest}
                />
              );
            },
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");

              // ✅ If it's a code block (not inline) and has language class
              if (!inline && match) {
                return (
                  <SyntaxHighlighter
                    {...props}
                    PreTag="div"
                    language={match[1]}
                    style={dark}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                );
              }

              // ✅ Inline code (surrounded by single backticks)
              return (
                <code
                  {...props}
                  style={{
                    backgroundColor: " #f0f0f0",
                    color: "black",
                    padding: "2px 4px",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                    fontFamily: "monospace",
                  }}
                >
                  {children}
                </code>
              );
            },
          }}
        ></Markdown>
      </div>
    </div>
  );
}

export default Preview;
