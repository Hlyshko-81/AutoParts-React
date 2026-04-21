import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="logo" style={{fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '1px'}}>
        <Link to="/" style={{color: 'white', textDecoration: 'none'}}>AUTOPARTS</Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/catalog">Каталог</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}