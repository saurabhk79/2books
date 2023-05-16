import React from "react";
import styles from "../../styles/Book.module.css";

const Book = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.bookbox}>
          <div>
            <div className={styles.bookimg}></div>
            <div className={styles.like}>Like</div>
          </div>
          <div className={styles.bookdetail}>
            <h1>Title of the book</h1>
            <h2>Saurabh</h2>
            <p>
              Author: <br /> action, scientific, supernatural
            </p>
          </div>
        </div>
        <div className={styles.summary}>
          <b>Summary:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nemo
            inventore quisquam et voluptatibus, odio quos eum similique enim
            consequatur expedita magni minus, eveniet consequuntur blanditiis
            repellendus incidunt voluptate. Quo doloribus in ad neque aut saepe,
            quos voluptatum iusto facere.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Book;

// export const getServerSideProps = async (context) => {
//   const res = await fetch("https://localhost:3000/pages/api/getDetail");
//   const
// };
