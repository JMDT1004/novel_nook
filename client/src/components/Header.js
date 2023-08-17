import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function Header({ setSearchResults, state, setState }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const resultsPerPage = 40;

  // Search books from Google Books API
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${resultsPerPage}`);
      setSearchResults(response.data.items || []);
      setSearchTerm('');
      navigate('/search');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const logout = async e => {
    e.preventDefault();

    await axios.get('/api/logout');

    setState((oldState) => {
      return {
        ...oldState,
        user: null
      }
    })

    navigate('/');
  }

  return (
    <header className="top  ">
      <nav className="flex items-center justify-around  py-4 lg:px-12 shadow border-gray-400  border-t-2 border-b bg-blueGray-200 py-4 lg:px-12  ">
        <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 mb-0">
          <a href="/">
            <h3 className="novelNook text-xl text-center pr-10 " id="novel">
              NOVEL<span id="nook">NOOK</span>
            </h3>
          </a>
          <div className="text-md font-bold text-blue-700 lg:flex-grow">
            
            <ul className="flex items-center space-x-6 ">
              <li className="font-semibold text-gray-700">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 active-link" : ""
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="font-semibold text-gray-700">
                <NavLink
                  to="/bestsellers"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 active-link" : ""
                  }
                > 
                  Best Sellers
                </NavLink>
              </li>

              {!state.user && (
                  <li className="font-semibold text-gray-700">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 active-link" : ""
                    }
                  >
                    Sign In/ Join
                  </NavLink>
                </li>
              )}

              {state.user && (
                <>
                  <li className="font-semibold text-gray-700">
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 active-link" : ""
                    }
                  >
                    Dashboard
                  </NavLink>
                  
                </li>
                <li className="font-semibold text-gray-700">
                  
                  <NavLink onClick={logout} to="/logout">Log Out</NavLink>
                </li>
                </>
                
              ) }
            </ul>
          </div>
          {/* <!-- This is an example component --> */}

          <div className="relative mx-auto text-gray-600 pt-2 ">
            <input
              className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none w-96 md:w-120 lg:w-150"
              type="search"
              name="search"
              placeholder="Search by Title, Author or ISBN"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(e);
                }
              }}
            />
          </div>

          <div className="pl-4 lg:ml-4 relative inline-block lg:block hidden">
            <a className="" href="/cart">
              <div className="absolute -top-2 left-10 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                1
              </div>
              <svg
                className="h-8 p-1 hover:text-green-500 duration-200 svg-inline--fa fa-shopping-cart fa-w-18 fa-7x"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="shopping-cart"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;