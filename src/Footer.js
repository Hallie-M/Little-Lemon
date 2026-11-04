

function Footer() {
  return (
    <footer>
      <h2>Little Lemon</h2>
      <div className="footer-grid">
        <nav aria-label="Footer navigation">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#menu">Menu</a></li>
            <li><a href="/booking">Reservations</a></li>
          </ul>
        </nav>

        <div>
          <h3>Contact</h3>
          <p>Chicago, Illinois</p>
          <p>For reservations, please use our online booking form.</p>

        </div>
      </div>
    </footer>
  );
}


export default Footer;
