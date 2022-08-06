import '../styles/App.css';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <div className='main-content'>
            <About />
            <Portfolio />
            <Contact />
        </div>
        
    </div>
  );
}

export default App;
