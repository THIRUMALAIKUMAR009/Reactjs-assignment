import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark'; // Choose your preferred theme

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div>
      <SyntaxHighlighter
        language="jsx" // Change the language as needed (e.g., javascript, python, etc.)
        style={theme}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
      <textarea
        value={code}
        onChange={handleChange}
        placeholder="Enter your code here..."
        style={{
          fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
          fontSize: 14,
          width: '100%',
          height: '300px',
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '5px',
        }}
      />
    </div>
  );
};

export default CodeEditor;
