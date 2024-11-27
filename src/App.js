import './App.css';
import AboutUs from './components/AboutUs';
import Footer from './components/common/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from './components/Slider';
import Swiper from './components/Swiper';

function App() {
  return (
    <>
    <Navbar about="About me" title="Kaijuu" second="Crew"/>
    <AboutUs/>
    <Hero/>
    <Footer/>
   <SimpleSlider/>
   <Swiper/>
    </>
  );
}

export default App;
