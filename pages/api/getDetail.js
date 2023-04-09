export default function getBook(req, res) {
  const key = process.env.REACT_APP_GOOGLE_BOOK_API;

  const id = req.query.id;
  try {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${key}`)
      .then((response) => response.json())
      .then((data) => res.status(200).json(data));
  } catch (err) {
    res.status(500).json({ error: "encountered error" });
  }
}
