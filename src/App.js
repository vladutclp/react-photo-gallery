import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Gallery from './Components/Gallery/Gallery';
import NavBar from './Components/UI/NavBar/NavBar';
import Shop from './Components/Shop/Shop';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import classes from './App.module.scss';
import Footer from './Components/UI/Footer/Footer';
import Cart from './Components/Cart/Cart';
import ShopItem from './Components/Shop/ShopItem';

const App = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shop/shop-item' element={<ShopItem />} />
        </Routes>
        <div className={classes.footerPush}></div>
      </div>
      <Footer />
    </>
  );
};

export default App;
