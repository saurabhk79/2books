import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import styles from "../../styles/Book.module.css";

function Post({ data }) {
  const [loading, setLoading] = useState(true);

  console.log(data);
  const info = data.volumeInfo;

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
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <ClipLoader />
        </div>
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
            {/* <div className={styles.bookBoldText}>
          Tags:
          <br />
          {categories.map((cat) => {
            return cat;
          })}
        </div> */}
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
  const res = await fetch(
    `http://localhost:3000/api/getDetail?id=${context.params.id}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
