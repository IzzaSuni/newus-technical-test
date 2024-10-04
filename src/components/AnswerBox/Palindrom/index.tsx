import ReactMarkdown from "react-markdown";
import { dataMD } from "./data-md";
import CodeComponent from "../../CodeComponent";

export default function PalindromSection() {
  function Palindrom(input: number) {
    if (input < 0) return false;

    let reverted = 0;
    let inputCopy = input;

    while (inputCopy) {
      reverted = reverted * 10 + (inputCopy % 10);
      inputCopy = Math.floor(inputCopy / 10);
    }

    return reverted == input;
  }

  function Palindrom2(input: number): boolean {
    if (input < 0) return false;
    const str = input.toString();

    return str === str.split("").reverse().join("");
  }

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
