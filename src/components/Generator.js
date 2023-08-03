import { useContext, useState, useEffect } from "react";
import KigoContext from "@/context/KigoContext";
import GeneratorHeader from "./GeneratorHeader";
import GeneratorChosenKigo from "./GeneratorChosenKigo";

export default function Generator() {
  const [chosenKigo, setChosenKigo] = useState({});
  const [prompt, setPrompt] = useState("");

  const { kigo, setKigoContext } = useContext(KigoContext);

  const handleGenerate = () => {};

  useEffect(() => {
    setChosenKigo(kigo);
  }, [kigo]);

  return (
    <div className="generator w-full h-full flex justify-center">
      <div className="w-11/12 flex flex-col h-full generator-container pt-6">
        <GeneratorHeader />
        <GeneratorChosenKigo chosenKigo={chosenKigo} />
        <div className="w-full h-full mb-8 flex justify-center">
          <div className="w-[35%] border mt-4 p-4 flex flex-col">
            <h3 className="text-xs uppercase font-semibold"> Prompt</h3>
            <textarea
              className="w-full h-[90%] p-2 pl-0 text-sm focus:outline-none resize-none"
              type="text"
              placeholder="What is your Haiku about?"
            />
            <button
              onClick={handleGenerate()}
              className="text-sm text-white w-24 ml-auto bg-primary-green px-4 py-2 mb-2 "
            >
              Generate
            </button>
          </div>
          <div className="w-[65%] pt-8 p-8">
            <h3 className="text-xs uppercase font-semibold ">Your Haiku</h3>
            <div className="w-full h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
