import { NavLink } from 'react-router-dom';
function Header(props) {
    const logout = async e => {
        e.preventDefault();
        await axios.get('/api/logout');
        props.setState((oldState) => {
            return {
                ...oldState,
                user: null
            }
        })
    }
    return (
        <header>
            <nav>
                {props.state.user && (
                    <>
                        <p className="header-username">Welcome, {props.state.user.username}</p>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <NavLink onClick={logout} to="/logout">Log Out</NavLink>
                    </>
                )}
                {!props.state.user && (
                    <NavLink to="/auth">Login or Register</NavLink>
                )}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>
    );
}
export default Header;