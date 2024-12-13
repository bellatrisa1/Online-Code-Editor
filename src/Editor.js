import React from "react";
import { Editor } from "@monaco-editor/react";

const CodeEditor = ({ language, code, setCode }) => {
  return (
    <Editor
      height="300px"
      language={language}
      value={code}
      onChange={(value) => setCode(value)}
      options={{
        fontSize: 14,
        minimap: { enabled: false },
      }}
    />
  );
};

export default CodeEditor;