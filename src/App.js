import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
// import Map from './components/Maps';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/menu" element={<Menu items={menuItems} />} /> */}
        {/* <Route path="/special-offers" element={<SpecialOffers />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Menu/>
      <Contact />
      {/* <Map/> */}
      <Footer/>
    </Router>
  );
}

export default App;
