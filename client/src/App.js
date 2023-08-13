import { BrowserRouter } from 'react-router-dom'



// Import components
import Header from './components/Header'
import Footer from './components/Footer'

// Import Pages

import Landing from './Pages/Landing'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Auth from './Pages/Auth'
import Search from './Pages/Search'

function App() {
  return (
    <BrowserRouter>
     <div>

      <Header />
      <Search />
      <About />
      <Dashboard />
      <Auth />
      <Footer />

    </div></BrowserRouter>

  );
}
export default App;