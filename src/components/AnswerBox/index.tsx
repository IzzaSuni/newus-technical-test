import { lazy, useMemo } from "react";
import useMenuIndex from "../Navbar/navbar.atom";
import PalindromSection from "./Palindrom";

const FooBarSection = lazy(() => import("./FooBar"));
const ReactSection = lazy(() => import("./React"));

export default function AnswerBox() {
  const [menuIndex] = useMenuIndex();

  const AnswerComponent = useMemo(() => {
    if (menuIndex == 1) return FooBarSection;

    return PalindromSection;
  }, [menuIndex]);

  return (
    <>
      {menuIndex == 2 ? (
        <ReactSection />
      ) : (
        <div className="rounded w-full p-4 bg-light-surface dark:bg-dark-surface mt-4 lg:mt-8">
          <AnswerComponent />
        </div>
      )}
      <p className="text-right mt-4">
        <i>Akbar Suni</i>
      </p>
    </>
  );
}
