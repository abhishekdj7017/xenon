export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const PIXEL_ID = "1366618005528841";
  const ACCESS_TOKEN = EAANbFLf6MnsBSdT4tGml10xZC8qijKYX3ZBb3U16dmcXuW99fV5pZAGfhiXGzB1pAVxpoKbAmp6SYm637tjvlNtR4jkui3ngLzYwa7gg3ZBPqDZAZCFHZC9q3r1GDFZCrgbvnIWn0oS0GAzVDOL0Mnb0aoX3ceEZCNEn1gx4HdBiaQW1J52WoB9OZCUrwUPHrNcAI0LwZDZD;

  try {
    const response = await fetch(
      `https://graph.facebook.com/v24.0/${PIXEL_ID}/events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: [{
            event_name: "PageView",
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website"
          }],
          access_token: ACCESS_TOKEN
        })
      }
    );

    const result = await response.json();
    return res.status(response.status).json(result);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
