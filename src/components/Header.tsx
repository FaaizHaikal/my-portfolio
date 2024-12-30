import './Header.css';

function Navbar() {
  return (
    <header>
      <a href="#about" className="logo">
        Faa'iz<span>.</span>
      </a>

      <nav>
        <a href="#about" className="active">
          About
        </a>
        <a href="#experiences">Experiences</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
