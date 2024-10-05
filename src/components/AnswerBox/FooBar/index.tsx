import ReactMarkdown from "react-markdown";
import { dataMD } from "./data-md";
import CodeComponent from "../../CodeComponent";
import { FooBar } from "@/src/testAnswer";
import { FooBarText } from "@/src/testAnswerView";

export default function FooBarSection() {
  return (
    <>
      <ReactMarkdown>{dataMD}</ReactMarkdown>
      <div className="flex justify-center gap-8 w-full">
        <CodeComponent code={FooBar} codeText={FooBarText} max={1000} />
      </div>
    </>
  );
}
