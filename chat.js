import { config } from "dotenv";
config();

import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-4.1", // or "gpt-4o"
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Hello, who won the world series in 2020?" }
    ]
  });

  console.log(response.choices[0].message.content);
}

main().catch(console.error);
