function Footer() {
  return (
    <footer id="footer">
      <p>
        &copy; <span className="footer-year">
          {new Date().getFullYear()}
        </span>{" "}
        SANTOSH G. All rights reserved.
      </p>

      <p>Built with HTML, CSS and JavaScript.</p>

      <nav>
        <a
          href="https://github.com/RaajdheepDev"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/santhoshghatkar/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </nav>
    </footer>
  );
}

export default Footer;