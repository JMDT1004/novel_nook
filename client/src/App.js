import logo from './logo.svg';
import './index.scss';




// Import Components
import Header from './components/Header'
import Footer from './components/Footer'



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
