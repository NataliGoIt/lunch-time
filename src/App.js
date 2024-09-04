import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Map from './components/Maps';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import products from './components/products'

function handleAddToCart(ha){
  return ha;
}
function App() {
  return (
    <Router>
      {/* <Nav/> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/menu" element={<Menu items={menuItems} />} /> */}
        {/* <Route path="/special-offers" element={<SpecialOffers />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {products.map((product) => (
        <Cart
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}
      <Contact />
      <Map/>
      <Footer/>
    </Router>
  );
}

export default App;
