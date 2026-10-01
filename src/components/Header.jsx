import { Link, NavLink } from 'react-router';

const menu = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Tentang Saya' },
  { to: '/kontak', label: 'Kontak' },
];

const Header = () => {
  return (
    <header className="site-header">
      <nav className="container nav">
        <Link to="/" className="nav-brand">
          Bima
        </Link>
        <div className="nav-links">
          {menu.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;