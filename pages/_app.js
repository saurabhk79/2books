import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* Navbar here */}
      <nav className="navbar">
        <div className="navWrapper">
          <div className="brand">
            2Bo<span>oks</span>
          </div>
          <button className="navBtn">m</button>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}
