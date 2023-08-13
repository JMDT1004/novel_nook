import logo from './logo.svg';
import './App.css';




// Import Components
import Header from 'Pages/Header'
import Footer from 'Pages/Footer'



// Import Pages
import Landing from './Pages/Landing'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Auth from './Pages/Auth'



function App() {
  return (
    <div>
      <Header />
      <Landing />
      <About />
      <Dashboard />
      <Auth />
      <Footer />
    </div>
  );
}

export default App;
