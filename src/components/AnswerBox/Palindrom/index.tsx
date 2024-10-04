import ReactMarkdown from "react-markdown";
import { dataMD } from "./data-md";
import CodeComponent from "../../CodeComponent";
import { Palindrom, Palindrom2 } from "@/src/testAnswer";

export default function PalindromSection() {
  return (
    <>
      <ReactMarkdown>{dataMD}</ReactMarkdown>
      <div className="flex flex-col lg:flex-row justify-center gap-8 ">
        {[Palindrom, Palindrom2].map((fn, index) => (
          <CodeComponent code={fn} index={index + 1} />
        ))}
      </div>
    </>
  );
}
