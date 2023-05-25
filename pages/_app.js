import "../styles/globals.css";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  const [navToggle, setNavToggle] = useState(false);

  const handleNav = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="main">
      {/* Navbar here */}
      <nav className="navbar">
        <div className="navWrapper">
          <div className="brand">
            2Bo<span>oks</span>
          </div>
          <button className="navBtn" onClick={handleNav}>
            <MdOutlineMenu />
          </button>
        </div>

        <div className={`side-nav ${navToggle ? "side-nav-hidden" : ""}`}>
          <div className="close-nav">
            <span onClick={handleNav}>x </span>
          </div>
          <h2>Menu</h2>
          <hr />
          <div className="nav-option">
            <Link href={"/"}>Home</Link>
            <Link href={"/list"}>Books</Link>
            <Link href={"/about"}>About</Link>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}
