async function sendToGPT() {
  const userInput = document.getElementById('userInput').value;
  const responseBox = document.getElementById('response');

  const payload = {
    model: "gpt-4",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userInput }
    ]
  };

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    responseBox.textContent = data.choices[0].message.content;
  } catch (err) {
    responseBox.textContent = "Error: " + err.message;
  }
}