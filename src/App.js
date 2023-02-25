
import './App.css';
import About from './components/about/About';
import Headers from './components/Headers/Headers';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';

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
    </main>
    </>
      
  );
}

export default App;
