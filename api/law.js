// api/law.js
export default async function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Missing query" });
  }

  try {
    // Example: CourtListener API (works server-side)
    const response = await fetch(
      `https://www.courtlistener.com/api/rest/v3/opinions/?search=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch law data");
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
