export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const PIXEL_ID = "1809532570042392";
  const ACCESS_TOKEN = EAANbFLf6MnsBSVvNywZCZB7A7pndeBDqInPHeLFKpZCULFIZB7QAI4NeVKk19LsclhXUQfaS7ve6ZA8SmITYTX0cr8CKMECrVomrj4DdOZC6iyp5cPlo2NuZBrfppxADBsOQwALZAQkCchjfdp1xPkROkfuL3tYPoXZCgFbWpB2QtBCuVGT2EmQD8fokf3RW4uxfZCNwZDZD;

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
