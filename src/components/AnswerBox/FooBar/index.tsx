import ReactMarkdown from "react-markdown";
import { dataMD } from "./data-md";
import CodeComponent from "../../CodeComponent";
import { FooBar } from "@/src/testAnswer";

export default function FooBarSection() {
  return (
    <>
      <ReactMarkdown>{dataMD}</ReactMarkdown>
      <div className="flex justify-center gap-8 w-full">
        <CodeComponent code={FooBar} max={1000} />
      </div>
    </>
  );
}
