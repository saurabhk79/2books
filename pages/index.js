import React from "react";
import styles from "../styles/Home.module.css";

const Index = () => {
  return (
    <div>
      <div className={styles.bgimg}></div>
      <main className={styles.main}>
        <div className={styles.title}>
          2Bo<span>oks</span>
        </div>
        <h2 className={styles.subtitle}>Find the books you love</h2>
        <div className={styles.btns}>
          <button>Search</button>
          <button>About</button>
        </div>
      </main>
    </div>
  );
};

export default Index;
