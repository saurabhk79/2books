import React from "react";
import Image from "next/image";
import styles from "../../styles/Book.module.css";

const Book = ({ data }) => {
  const book = data.volumeInfo;
  const {
    title,
    subtitle,
    publisher,
    previewLink,
    imageLinks,
    description,
    categories,
    authors,
  } = book;
  let photo = imageLinks && imageLinks.thumbnail;

  const setHtml = () => {
    return { __html: description };
  };

  return (
    <div>
      <main>
        <div className={styles.bookbox}>
          <div>
            <div className={styles.bookimg}>
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
            </div>
            <a href={previewLink} className={styles.like}>
              Preview
            </a>
          </div>
          <div className={styles.bookdetail}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h4>
              By:&nbsp;
              {authors.map((author) => {
                return author;
              })}
            </h4>
            <h4>Published by:&nbsp;{publisher}</h4>
            <h3>
              Categories:{" "}
              {categories.map((cat) => {
                return cat;
              })}
            </h3>
          </div>
        </div>
        <div className={styles.summary}>
          <b>Summary:</b>
          <p dangerouslySetInnerHTML={setHtml()}></p>
        </div>
      </main>
    </div>
  );
};

export default Book;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/getDetail?id=${context.params.id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
