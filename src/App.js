
import './App.css';
import About from './components/about/About';
import Headers from './components/Headers/Headers';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
    <Headers/>
    <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    </main>
    </>
      
  );
}

export default App;
