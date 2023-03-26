import Link from "next/link";
import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <h2>Welcome to our Book Searching App!</h2>
      <h3>
        We are a free, open-source book searching app that helps you discover
        your next favorite book. Our app is powered by the Google Books API,
        which provides access to a vast collection of books and information
        about them.
      </h3>
      <p>
        Our goal is to make it easy for book lovers to find the books
        they&apos;re interested in, whether it&apos;s a bestseller, a classic,
        or a hidden gem. With our user-friendly interface and powerful search
        capabilities, you can easily browse books by title, author, subject, or
        ISBN.
      </p>
      <h2>Features:</h2>
      <ul>
        <li>Search for books by title, author, subject, or ISBN</li>
        <li>
          View book details, including cover image, description, and reviews
        </li>
        <li>Add books to your reading list</li>
        <li>Share book recommendations with your friends on social media</li>
        <li>Discover new books with our curated lists and recommendations</li>
        <li>Filter search results by relevance, publication date, and more</li>
      </ul>
      <h2>Open Source:</h2>
      <h3>
        Our app is open source, which means that anyone can contribute to its
        development and improvement. We believe that open-source software is the
        best way to create high-quality, reliable software that benefits
        everyone.
      </h3>
      <p>
        We are always looking for developers, designers, and contributors who
        share our passion for books and technology. If you&apos;re interested in
        contributing to our project, please visit our GitHub repository and
        check out our roadmap and issues.
      </p>
      Thank you for using our app, and happy reading!
      <div>
        <Link href={"/"} className={styles.backButton}>
          Go back
        </Link>
      </div>
    </div>
  );
};

export default About;
