import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ books, randomWd }) => {
  return (
    <div className={styles.bookWrapper}>
      {books.map((bk, i) => {
        try {
          const details = bk.volumeInfo;
          const img = details.imageLinks.thumbnail;
          const title = details.title.slice(0, 30);

          return (
            <Link
              href={`/book/[id]`}
              as={`/book/${bk.id}`}
              className={styles.book}
              key={i}
            >
              <Image
                src={img}
                alt="halwa"
                width={200}
                height={250}
                className={styles.bookImg}
              />

              <div className={styles.bookName}>{title}...</div>
            </Link>
          );
        } catch (err) {
          return (
            <h2>
              We got an unexpected error. <br /> Please refresh.
            </h2>
          );
        }
      })}
    </div>
  );
};

export default BookCard;
