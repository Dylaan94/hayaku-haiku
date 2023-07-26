import { kigoData } from "@/data/kigoData";
import { useEffect, useState } from "react";

export default function HaikuSelector() {
  const [kigoData, setKigoData] = useState("");

  useEffect(() => {
    setKigoData(kigoData);
  }, []);

  return (
    <div>
      <h1>Haiku Selector</h1>
    </div>
  );
}
