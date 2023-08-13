import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="top">
            <h3>NOVELNOOK</h3>

            <nav>
                <NavLink to="/" activeClassName="active-link">Search</NavLink>
                <NavLink to="/" activeClassName="active-link">Login/Register</NavLink>
                <NavLink to="/" activeClassName="active-link">Dashboard</NavLink>
                <NavLink to="/" activeClassName="active-link">About</NavLink>
            </nav>
        </header>
    )
}

export default Header;