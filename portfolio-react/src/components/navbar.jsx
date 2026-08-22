import { useState, useEffect } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="logo">Santosh G</div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;