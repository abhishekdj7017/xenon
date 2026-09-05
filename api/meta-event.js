export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const PIXEL_ID = "1605130227710024";
  const ACCESS_TOKEN = EAAflsuPEZA94BSYhwoQNwtSjayOtvvU6GHVCZAVW8PNkh3mmDqwCgQFhpgESkg1BcYraNJgmeizMs9kCEyGQEUdD7qhFlcPMkcB3XWCRAoMfE1gk8RGKiCzB41YyEU3lhxH5FgWfgmyFwWEne2t4UxDpxUwKszyXyGd9dFkjgY8stdlwxMSlRiQ4aaa8fAuAZDZD;

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
