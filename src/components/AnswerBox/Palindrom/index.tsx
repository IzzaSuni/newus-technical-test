import ReactMarkdown from "react-markdown";
import { dataMD } from "./data-md";
import CodeComponent from "../../CodeComponent";
import { Palindrom, Palindrom2 } from "@/src/testAnswer";
import { Palindrom2Text, PalindromText } from "@/src/testAnswerView";

export default function PalindromSection() {
  const data = [
    { fn: Palindrom, text: PalindromText },
    { fn: Palindrom2, text: Palindrom2Text },
  ];

  return (
    <>
      <ReactMarkdown>{dataMD}</ReactMarkdown>
      <div className="flex flex-col lg:flex-row justify-center gap-8 ">
        {data.map(({ fn, text }, index) => (
          <CodeComponent code={fn} codeView={text} index={index + 1} />
        ))}
      </div>
    </>
  );
}
