
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Headers from './components/Headers/Headers';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <>
    <Headers/>
    <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Qualification/>
    <Testimonials/>
    <Contact/>
    </main>
    </>
      
  );
}

export default App;
