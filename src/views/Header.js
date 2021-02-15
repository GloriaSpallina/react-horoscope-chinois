import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <div>
    <header className="header">
      <Link to="/" className="link-home link">Home</Link>
      <Link to="/horoscope_chinois" className="link"> Horoscope Chinois</Link>
    </header>
  </div>
);
export default Header;
