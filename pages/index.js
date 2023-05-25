import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import imgHero from "../public/book-hero.svg";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const Index = () => {
  return (
    <main>
      <div className={styles.box}>
        <div>
          <div className={styles.title}>
            2Bo<span>oks</span>
          </div>
          <h2 className={styles.subtitle}>Find the books you love</h2>
          <div className={styles.btns}>
            <Link href={"/list"}>Search</Link>
            <Link href={"/about"}>About</Link>
          </div>
        </div>
        <Image src={imgHero} alt={"book"} width={400} height={400} />
      </div>

      <div className={styles.gTag}>
        Powered by <FcGoogle /> Books
      </div>
    </main>
  );
};

export default Index;
