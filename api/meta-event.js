export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const PIXEL_ID = "1366618005528841";
  const ACCESS_TOKEN = EAANbFLf6MnsBScCaRgn1Umg5TOiVtEF3UfEkQwpF6BI9t0QhPIoZBIadzo2mz7hUFsr6mOUZC573izZAItENjfNOIFyWSHFObbCekbxHO0c7weBhPDVK2epZBeVe3K8Jv9d1cJmxAnD2srg1qSr6yTIC9UFbLyYYC12C7Xm6xPJiOJcN3XZB1y81JELYkZCGJeaQZDZD;

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
