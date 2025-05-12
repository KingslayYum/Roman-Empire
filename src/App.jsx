import { BrowserRouter } from 'react-router-dom';

import { About, Art, Blog, Contact, Exhibition, Fashion, Hero, History, Influence, Navbar } from './components';
import { StatueCanvas } from "./components/canvas";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Influence />
        <History />
        <Art />
        <Fashion />
        <Exhibition />
        <Blog />
        <div className='relative z-0 bg-primary'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
