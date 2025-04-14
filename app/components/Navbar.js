import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 d-flex justify-content-center">
      <div className="container d-flex justify-content-center">
        <Link className="navbar-brand mx-3" href="/">
          Home
        </Link>
        <Link className="nav-link mx-3" href="/about">
          About
        </Link>
        <Link className="nav-link mx-3" href="/contact">
          Contact
        </Link>
        <Link className="nav-link mx-3" href="/blog">
          Blog
        </Link>
        <Link className="nav-link mx-3" href="/quotes">
          Quotes
        </Link>
      </div>
    </nav>
  );
}
