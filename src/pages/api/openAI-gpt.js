// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
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
          { role: "user", content: "show me a haiku about the ocean" },
        ],
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.choices[0].message);
      res.status(200).json(data);
    } else {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } catch {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
