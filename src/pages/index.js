import KigoSelector from "@/components/KigoSelector";
import Header from "@/layout/Header";
import { useEffect, useState } from "react";

// components
import Sidebar from "@/components/Sidebar";
import Generator from "@/components/Generator";

// context
import KigoContext from "@/context/KigoContext";

export default function Home() {
  // state to track whether user has clicked submit
  const [clicked, setClicked] = useState(false);
  const [kigo, setKigoContext] = useState({
    en: "summer (natsu)",
    jp: "夏",
    hiragana: "なつ",
    romaji: "natsu",
    description: "Refers to the season of summer",
  });

  useEffect(() => {
    const getHaiku = async () => {
      try {
        const res = await fetch("/api/openAI-gpt");

        if (res.ok) {
          const data = await res.json();
          console.log(data);
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    };

    clicked ? getHaiku() : null;
  }, [clicked]);

  useEffect(() => {
    console.log(kigo);
  }, [kigo]);

  return (
    <KigoContext.Provider value={{ kigo, setKigoContext }}>
      <main class="homepage w-full h-screen overflow-scroll flex flex-col items-center ">
        <Header />
        <div className="w-[95%] flex">
          <Sidebar />
          <Generator />
          <KigoSelector />
        </div>
      </main>
    </KigoContext.Provider>
  );
}
