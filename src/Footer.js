

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
          <p>Phone: Coming Soon</p>
          <p>Email: Coming Soon</p>
        </div>

        <div>
          <h3>Social Media</h3>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
