import Editor from "react-simple-code-editor";
// @ts-expect-error no types
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

type CodeComponentProps = {
  index?: number;
  code: (arg: number) => unknown;
  max?: number;
};

export default function CodeComponent({
  index,
  code,
  max,
}: CodeComponentProps) {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <Editor
        onValueChange={(e) => e}
        disabled
        highlight={(code) => highlight(code, languages.js)}
        className="code-editor-container w-full"
        padding={10}
        value={(index ? `// Approacment ${index} \n` : "") + code.toString()}
      />
      <div className="flex gap-2">
        <Input
          value={inputValue ? String(inputValue) : ""}
          type="number"
          placeholder="input"
          className="px-4 py-2 w-full"
          onChange={({ target: { value } }) => {
            if (max && Number(value) > max) return;

            setResult("");
            setInputValue(Number(value));
          }}
        />
        <Button
          disabled={!inputValue}
          onClick={() =>
            setResult(() => {
              return `Result: ${code(inputValue)}`;
            })
          }
        >
          Run
        </Button>
      </div>
      <p className="max-w-[300px] max-h-[300px] overflow-auto">{result}</p>
    </div>
  );
}
