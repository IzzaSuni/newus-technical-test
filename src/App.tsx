import { Suspense } from "react";
import "./App.css";
import AnswerBox from "./components/AnswerBox";
import Navbar from "./components/Navbar";
import { SWRConfig } from "swr";

function App() {
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <Suspense fallback={null}>
        <div className="lg:w-[1024px] m-auto p-4">
          <Navbar />
          <AnswerBox />
        </div>
      </Suspense>
    </SWRConfig>
  );
}

export default App;
