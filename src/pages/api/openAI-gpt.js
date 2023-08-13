// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const prompt = req.body.prompt;
  const kigo = req.body.kigo;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `"write me a haiku in only Japanese - don't use any english, without a translation with this kigo: ${kigo} 
            and using this prompt: ${prompt}. Make sure to seperate each line with a comma and don't use line breaks." 
            `,
          },
        ],
      }),
    });

    let haikuJp, haikuEn;

    if (response.ok) {
      const data = await response.json();
      haikuJp = data.choices[0].message.content
        .split(",")
        .map((line) => line.trim().replace(/\.$/, ""));
      console.log(haikuJp);

      try {
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [
                {
                  role: "user",
                  content: `'write me an english translation of this haiku: ${haikuJp}'. 
                Seperate each line with a comma.`,
                },
              ],
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          haikuEn = data.choices[0].message.content
            .split(",")
            .map((line) => line.trim());
          console.log(haikuEn);
        }
      } catch (err) {
        console.log(err + "error in fetching English translation");
      }

      res.status(200).json({ jp: haikuJp, en: haikuEn });
    } else {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } catch {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
