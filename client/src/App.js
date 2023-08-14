import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import Pages
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Auth from "./Pages/Auth";
import Search from "./Pages/Search";
import Landing from "./Pages/Landing";
import Book from "./Pages/Book";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
          />
          <link
            rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
          />
        </Helmet>

        <Header setSearchResults={setSearchResults} />

        <main>
          <Routes>
            <Route path="/search" element={<Search searchResults={searchResults} />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/book/:id" element={<Book />} />
          </Routes>
        </main>

        <Footer />
      </HelmetProvider>
    </>
  );
}
export default App;
