import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navWrapper}>
        <Link href="/" className={styles.brand}>
          2Bo<span className={styles.colText}>oks</span>
        </Link>
        <ul className={styles.navOption}>
          <Link href="/about">
            <li className={styles.navItem}>About</li>
          </Link>
          <Link href="https://ko-fi.com/sauby79">
            <li className={styles.navItem}>Support Us!</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
