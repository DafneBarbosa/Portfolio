
import Header from './components/header/index';
import Banner from './components/banner/index';
import About from './components/about/index';
import Skills from './components/skills/index';
import Projects from './components/projects/index';
import Footer from './components/footer/index'
import Transtion1 from './components/transitions/index'
import './styles.css';


function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About />
        <Skills />
        <Transtion1 />
        <Projects />
      </main>
      
      <Footer />
    </>
    
  );
}

export default App;
