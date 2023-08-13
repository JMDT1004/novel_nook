import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="top">
            <h3>NOVELNOOK</h3>

            <nav>
                <NavLink to="/landing" activeClassName="active-link">Home</NavLink>
                <NavLink to="/search" activeClassName="active-link">Search</NavLink>
                <NavLink to="/login" activeClassName="active-link">Login/Register</NavLink>
                <NavLink to="/dashboard" activeClassName="active-link">Dashboard</NavLink>
                <NavLink to="/about" activeClassName="active-link">About</NavLink>
            </nav>
        </header>
    )
}

export default Header;