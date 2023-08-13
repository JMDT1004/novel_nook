import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';




// Import components
import Header from './components/Header'
import Footer from './components/Footer'

// Import Pages

import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Auth from './Pages/Auth'
import Search from './Pages/Search'
import Landing from './Pages/Landing'



function App() {
  return (
    <>
      <Header />
     <Routes>
      <Route path="/search" element={<Search />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboad" element={<Dashboard />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
      <Footer />
      </>

  );
}
export default App;