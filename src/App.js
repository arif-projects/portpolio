import './App.css';
import About from './Pages/About/About';
import Banner from './Pages/Banner/Banner';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import MySkills from './Pages/MySkills/MySkills';
import MyWork from './Pages/MyWork/MyWork';
import Navber from './Pages/Navber/Navber';
import Testimonial from './Pages/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Banner></Banner>
      <About></About>
      <MySkills></MySkills>
      <MyWork></MyWork>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
