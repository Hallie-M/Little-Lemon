
import { Link } from "react-router-dom";


function Navigation() {
  return (

    <nav aria-label="Main navigation">

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#menu">Menu</a></li>
        <li><Link to="/booking">Reservations</Link></li>
      </ul>
    </nav>
  )
}
export default Navigation;


