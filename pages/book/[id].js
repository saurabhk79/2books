import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import styles from "../../styles/Book.module.css";

function Post(props) {
  const [loading, setLoading] = useState(false);

  const info = props.data.volumeInfo;
  const {
    title,
    subtitle,
    authors,
    publisher,
    publishedDate,
    description,
    pageCount,
    categories,
    imageLinks,
    language,
  } = info;
  const photo = imageLinks.thumbnail;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    });
  }, 3000);

  return (
    <div>
      {loading ? (
        <ClipLoader color="#f4a261" />
      ) : (
        <div className={styles.bookWrapper}>
          <Image
            src={photo}
            alt={title}
            width={250}
            height={400}
            className={styles.bookImage}
          />
          <div className={styles.bookDetails}>
            <div className={styles.bookTitle}>{title}</div>
            <h2 className={styles.bookSubtitle}>{subtitle}</h2>
            <div className={styles.bookBoldText}>
              By&nbsp;
              {authors.map((person) => {
                return person;
              })}
            </div>
            <div className={styles.bookBoldText}>
              Tags:
              <br />
              {categories.map((cat) => {
                return cat;
              })}
            </div>
            <div>From:&nbsp;{publisher}</div>
            <div>On:&nbsp;{publishedDate}</div>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
            <div className={styles.bookBoldText}>Total page :{pageCount}</div>
            <div>Written in :{language}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;

export async function getServerSideProps(context) {
  const key = "AIzaSyBEaOB_V5t09GVGU45QsIgjmFD3CeOSc5A";
  const res =
    await fetch(`https://www.googleapis.com/books/v1/volumes/${context.params.id}?key=${key}
`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
