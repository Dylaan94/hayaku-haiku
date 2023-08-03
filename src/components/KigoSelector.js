import allKigoData from "@/data/allKigoData";
import { useState, useEffect, useContext } from "react";

// components
import CustomSelector from "./CustomSelector";

// Options in a three tuple of [English, Japanese, key]
const seasonOptions = [
  ["spring", "春", "spring"],
  ["summer", "夏", "summer"],
  ["autumn", "秋", "autumn"],
  ["winter", "冬", "winter"],
];

const seasonalityOptions = [
  ["The Season", "時候", "theSeason"],
  ["The Sky and the Heavens", "天・空", "theSkyAndTheHeavens"],
  ["The Earth", "地理", "theEarth"],
  ["Humanity", "人事", "humanity"],
  ["Observances", "行事", "observances"],
  ["Animals", "動物", "animals"],
  ["Plants", "植物", "plants"],
];

const seasonPartOptions = [
  ["All Spring", "春の四季", "allSpring"],
  ["Early Spring", "早春", "earlySpring"],
  ["Mid Spring", "仲春", "midSpring"],
  ["Late Spring", "晩春", "lateSpring"],
];

export default function SpringKigo() {
  // state for storing kigo data
  const [kigo, setKigo] = useState({});
  // state for tracking whether kigo data has been set
  const [kigoAreSet, setKigoAreSet] = useState(false);
  // state for setting season
  const [season, setSeason] = useState("spring");
  // state for checking which seasonality is selected
  const [seasonality, setSeasonality] = useState("theSeason");
  // state for displaying seasonality
  const [displaySeasonality, setDisplaySeasonality] = useState(false);
  // state for setting season part
  const [seasonPart, setSeasonPart] = useState("allSpring");

  useEffect(() => {
    setKigo(allKigoData);
  }, []);

  useEffect(() => {
    if (kigo) {
      setKigoAreSet(true);
    }
  }, [kigo]);

  useEffect(() => {
    season === "spring"
      ? (setSeasonPart("allSpring"), setDisplaySeasonality(true))
      : (setSeasonPart("misc"), setDisplaySeasonality(false));
  }, [season]);

  useEffect(() => {
    if (season === "spring") {
      seasonality === "theSeason" ||
      seasonality === "theSkyAndTheHeavens" ||
      seasonality === "theEarth"
        ? (setSeasonPart("allSpring"), setDisplaySeasonality(true))
        : (setSeasonPart("misc"), setDisplaySeasonality(false));
    }
  }, [seasonality]);

  return (
    <>
      {kigoAreSet ? (
        <div className="kigo-selector flex flex-col items-center w-72 border-l ">
          <div className=" pl-4 pt-8 pb-24 ">
            <CustomSelector
              labelEn="Season"
              labelJp="季節"
              options={seasonOptions}
              setOption={setSeason}
            />
            <CustomSelector
              labelEn="Seasonality"
              labelJp="季節性"
              options={seasonalityOptions}
              setOption={setSeasonality}
            />

            {displaySeasonality &&
            (seasonality === "theSeason" ||
              seasonality === "theSkyAndTheHeavens" ||
              seasonality === "theEarth") ? (
              <CustomSelector
                labelEn="Season Part"
                labelJp="春の四季"
                options={seasonPartOptions}
                setOption={setSeasonPart}
              />
            ) : null}

            <CustomSelector
              labelEn="Kigo"
              labelJp="季語"
              options={kigo[season][seasonality][seasonPart]}
              kigo={true}
            />
            <h3 className="text-xs italic">
              This is the kigo that will be used in your Haiku
            </h3>
          </div>

          {/* <div class="kigo-grid grid grid-cols-4 w-full gap-6 pl-4">
            {kigo[season][seasonality][seasonPart]?.map((kigo, index) => {
              return (
                <Kigo kigo={kigo} key={index} setChosenKigo={setChosenKigo} />
              );
            })}
          </div> */}
        </div>
      ) : null}
    </>
  );
}
