import ReactMarkdown from "react-markdown";
import { dataMD } from "./data-md";
import CodeComponent from "../../CodeComponent";

export default function FooBarSection() {
  function FooBar(input: number) {
    if (input <= 0) return;

    const res = [];
    let i = 1;

    while (i !== input) {
      const is3 = i % 3 == 0;
      const is5 = i % 5 == 0;

      res.push(is3 && is5 ? "catKitty" : is3 ? "cat" : is5 ? "Kitty" : i);

      i++;
    }
    return res.join(", ");
  }

  return (
    <>
      <ReactMarkdown>{dataMD}</ReactMarkdown>
      <div className="flex justify-center gap-8">
        <CodeComponent code={FooBar} max={1000} />
      </div>
    </>
  );
}
