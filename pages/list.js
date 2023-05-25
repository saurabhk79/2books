import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { PulseLoader } from "react-spinners";

import styles from "../styles/List.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

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

  // This is for the items to animate for the framer motion
  // const container = {
  //   hidden: { opacity: 1, scale: 0 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       delayChildren: 0.3,
  //       staggerChildren: 0.2,
  //     },
  //   },
  // };

  // const item = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //   },
  // };

  return (
    <div>
      <Head>
        <title>2Book</title>
      </Head>

      <main>
        <h1>Search</h1>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Type to search..."
          value={search}
          onChange={(e) => handleBookChange(e)}
        />

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
                    return (
                      // <motion.div animate={item} >
                      <BookCard bk={bk} key={i} />
                      // </motion.div>
                    );
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
        <h3>{book.title}</h3>
      </div>
    </Link>
  );
};

export default List;
