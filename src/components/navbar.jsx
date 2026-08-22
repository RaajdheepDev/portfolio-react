function Navbar() {
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

        <button className="theme-toggle">🌞</button>
      </nav>
    </header>
  );
}

export default Navbar;