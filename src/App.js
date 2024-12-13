import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";

const App = () => {
  const [code, setCode] = useState("// Write your code here");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("javascript");

  const runCode = () => {
    if (language === "javascript") {
      try {
        const capturedLogs = [];
        const originalLog = console.log;

     
        console.log = (...args) => {
          capturedLogs.push(args.join(" "));
          originalLog(...args); // Для отладки в консоли браузера
        };

        // Выполнение кода
        eval(code);

        console.log = originalLog; 

        setOutput(capturedLogs.join("\n") || "Executed successfully!");
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      }
    } else {
      setOutput("Language not supported yet.");
    }
  };

  return (
    <div>
      <h1>Online Code Editor</h1>
      <label>
        Select Language:
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
      </label>
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
      <button onClick={runCode}>Run</button>
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default App;
