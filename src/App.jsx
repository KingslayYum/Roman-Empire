import { BrowserRouter } from 'react-router-dom';
import { About, Art, Architecture, Blog, Contact, Exhibition, Fashion, ImageMap, Hero, History, Influence, Power, Navbar } from './components';
import { StatueCanvas } from "./components/canvas";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        
        <div className="fixed top-0 left-0 w-full h-screen z-0">
          <StatueCanvas />
        </div>
        <Navbar />

        <div className="relative z-10">
          <div className="bg-transparent"> {/* Remove bg-hero-pattern if using 3D as background */}
            <Hero />
          </div>
          <About />
        </div>

        <div className="relative z-10 bg-primary">
          <Influence />
          <History />
          <ImageMap />
          <Fashion />
          <Exhibition />
          <div className='relative z-0 bg-primary'>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
