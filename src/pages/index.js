import KigoSelector from "@/components/KigoSelector";
import Header from "@/layout/Header";
import { useEffect, useState } from "react";

// components
import Sidebar from "@/components/Sidebar";
import Generator from "@/components/Generator";

export default function Home() {
  // state to track whether user has clicked submit
  const [clicked, setClicked] = useState(false);

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

  return (
    <main class="homepage w-full flex flex-col items-center ">
      <Header />
      <div className="w-[95%] flex">
        <Sidebar />
        <Generator />
        <KigoSelector />
      </div>
    </main>
  );
}
