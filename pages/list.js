import React from "react";
import Head from "next/head";
import styles from "../styles/List.module.css";

const List = () => {
  return (
    <div>
      <Head>
        <title>2Book</title>
      </Head>

      {/* Main Content here */}
      <main className={styles.main}>
        <div>
          <h1>Search</h1>
          <input
            type="text"
            className={styles.searchBar}
            placeholder="Type to search..."
          />
        </div>

        <div className={styles.books}>
          <h1>Books</h1>
          <hr />
          <div className={styles.bookgrid}>
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default List;

const BookCard = () => {
  return (
    <div className={styles.bookCard}>
      <h2></h2>
    </div>
  );
};
