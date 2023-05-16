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

    if (search.length >= 2) {
      setBooks([]);
      getBooks();
    } else {
      setBooks([]);
    }
  };

  const getBooks = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/getBook?book=${search}`);
      const data = await res.json();
      setBooks(data.items);
      console.log(data);
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
        <h1>Search</h1>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Type to search..."
          value={search}
          onChange={(e) => handleBookChange(e)}
        />

        {/* Books here */}
        <div className={styles.books}>
          <div className={styles.bookHeader}>
            <h1>Books</h1>
          </div>
          <hr />
          {loading ? (
            <div className={styles.loaderBox}>
              {search && search.length > 2 ? (
                <PulseLoader
                  speedMultiplier={0.5}
                  size={20}
                  color={"#f4a261"}
                />
              ) : (
                <h2>Type to search...</h2>
              )}
            </div>
          ) : (
            <div className={styles.bookgrid}>
              {books.length > 0
                ? books.map((bk, i) => {
                    return <BookCard key={i} bk={bk} />;
                  })
                : null}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

// Card of books here
const BookCard = ({ bk }) => {
  // Check if imageLinks and thumbnail properties exist
  let book = bk.volumeInfo;
  let photo = book.imageLinks && book.imageLinks.thumbnail;

  return (
    <Link href={`/book/[id]`} as={`/book/${bk.id}`} className={styles.bookCard}>
      {photo ? (
        <Image
          src={photo}
          alt={book.title}
          className={styles.bookPhoto}
          fill={true}
          sizes={20}
        />
      ) : (
        <div className={styles.noImage}>No Image Available</div>
      )}
      <div className={styles.details}>
        <h4>{book.title}</h4>
        {/* <p>{book.subtitle}</p> */}
      </div>
    </Link>
  );
};

// export const getStaticProps = async () => {
// }

export default List;
