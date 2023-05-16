export default async function getBook(req, res) {
  const key = process.env.REACT_APP_GOOGLE_BOOK_API;
  const id = req.query.id;

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=${key}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Encountered an error" });
  }
}
