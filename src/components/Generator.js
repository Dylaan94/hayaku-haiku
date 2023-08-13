import { useContext, useState, useEffect } from "react";
import KigoContext from "@/context/KigoContext";
import GeneratorHeader from "./GeneratorHeader";
import GeneratorChosenKigo from "./GeneratorChosenKigo";

export default function Generator() {
  const [chosenKigo, setChosenKigo] = useState({});
  const [kigoKanji, setKigoKanji] = useState("");
  const [prompt, setPrompt] = useState("");
  const [showHaiku, setShowHaiku] = useState(true);
  const [haiku, setHaiku] = useState({
    jp: ["夏の風、", "尾道の猫が舞う、", "蝉の声"],
    en: [
      "Summer breeze whispers,",
      "Onomichi's cat dances,",
      "cicedas singing",
    ],
  });

  const { kigo, setKigoContext } = useContext(KigoContext);

  const handleGenerate = () => {
    console.log("your prompt is:", prompt, "your kigo is:", kigoKanji);

    const getHaiku = async () => {
      setShowHaiku(false);

      try {
        const res = await fetch("/api/openAI-gpt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: prompt,
            kigo: kigoKanji,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setHaiku(data);
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    };

    getHaiku();
  };

  useEffect(() => {
    setShowHaiku(true);
  }, [haiku]);

  useEffect(() => {
    setChosenKigo(kigo);
    setKigoKanji(kigo.jp);
  }, [kigo]);

  return (
    <>
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
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button
                onClick={() => handleGenerate()}
                className="text-sm text-white w-24 ml-auto bg-primary-green px-4 py-2 mb-2 "
              >
                Generate
              </button>
            </div>
            <div className="w-[65%] pt-8 p-8 flex flex-col h-full">
              <h3 className="text-xs uppercase font-semibold ">Your Haiku</h3>
              <div className="w-full h-full flex flex-col items-center pt-12">
                {showHaiku ? (
                  <span class="flex flex-col text-4xl">
                    <p>{haiku.jp[0]}</p>
                    <p>{haiku.jp[1]}</p>
                    <p>{haiku.jp[2]}</p>
                    <span className="flex flex-col text-gray-400 text-sm pt-6">
                      <p> {haiku.en[0]} </p>
                      <p> {haiku.en[1]} </p>
                      <p> {haiku.en[2]} </p>
                    </span>
                  </span>
                ) : (
                  <a> loading... </a>
                )}
              </div>

              <div className="w-full h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
