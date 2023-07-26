import HaikuSelector from "@/components/HaikuSelector";
import { useEffect, useState } from "react";

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
    <main>
      <h2 className="text-2xl font-bold text-center"> 早く俳句</h2>
      <h1 className="text-4xl font-bold text-center">Hayaku Haiku</h1>

      <p className="text-center"> A haiku generator powered by GPT-3</p>
      <HaikuSelector />
    </main>
  );
}
