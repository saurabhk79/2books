import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { PulseLoader } from "react-spinners";

import styles from "../styles/List.module.css";
import Image from "next/image";

const List = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleBookChange = (e) => {
    setSearch(e.target.value);

    // if (search.length >= 2) {
    //   getBooks(search);
    // } else {
    //   setBooks([]);
    // }
  };

  const getBooks = async (e) => {
    e.preventDefault();
    try {
      if (search.length) {
        const res = await fetch(`/api/getBook?book=${search}`);
        const data = await res.json();
        setBooks(data.items);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };
  return (
    <div>
      <Head>
        <title>2Book</title>
      </Head>

      <main className={styles.main}>
        {/* Search bar here */}
        <form onSubmit={(e) => getBooks(e)}>
          <h1>Search</h1>
          <input
            type="text"
            className={styles.searchBar}
            placeholder="Type to search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        {/* Books here */}
        <div className={styles.books}>
          <div className={styles.bookHeader}>
            <h1>Books</h1>
          </div>
          <hr />
          {loading ? (
            <div className={styles.loaderBox}>
              <PulseLoader speedMultiplier={0.5} color={"#f4a261"} />
            </div>
          ) : (
            <div className={styles.bookgrid}>
              {books.map((bk, i) => {
                return <BookCard key={i} book={bk.volumeInfo} />;
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

// Card of books here
const BookCard = ({ book }) => {
  let photo = book.imageLinks.thumbnail;

  return (
    <div className={styles.bookCard}>
      <Image
        src={photo}
        alt={book.title}
        className={styles.bookPhoto}
        fill={true}
      />
      <div className={styles.details}>
        <h4>{book.title}</h4>
        <p>{book.subtitle}</p>
      </div>
    </div>
  );
};

// export const getStaticProps = async () => {
// }

export default List;
