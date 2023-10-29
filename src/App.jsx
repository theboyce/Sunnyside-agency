import './App.css';
import BasicServices from './components/BasicServices';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Hero />
      <Services />
      <BasicServices />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
