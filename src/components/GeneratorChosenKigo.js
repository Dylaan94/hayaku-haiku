export default function GeneratorChosenKigo({ chosenKigo }) {
  return (
    <>
      <h2 className="text-lg font-semibold py-4">Your chosen Kigo:</h2>

      <div className="flex items-center w-full border-y py-5">
        <div className="kigo-kanji min-w-1/6 flex flex-col justify-center items-center pr-4">
          <p className="text-sm">{chosenKigo.hiragana}</p>
          <p className="text-6xl">{chosenKigo.jp}</p>
        </div>
        <span className="kigo-description ">
          <div>
            <p className="text-base">{chosenKigo.en}</p>
          </div>

          <div></div>
          <div>
            <p className="text-sm text-gray-600">{chosenKigo.romaji}</p>
          </div>
          {chosenKigo.description ? (
            <div>
              <p className="text-sm text-gray-600">{chosenKigo.description}</p>
            </div>
          ) : null}
        </span>
      </div>
    </>
  );
}
