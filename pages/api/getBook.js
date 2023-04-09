export default function getBook(req, res) {
  const key = process.env.REACT_APP_GOOGLE_BOOK_API;

  const search = req.query.book;
  try {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&max_results=18&printType=books&key=${key}`
    )
      .then((response) => response.json())
      .then((data) => res.status(200).json(data));
  } catch (err) {
    res.status(500).json({ error: "encountered error" });
  }
}
