import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home/Home';
import Gallery from './Components/Gallery/Gallery';
import NavBar from './Components/UI/NavBar/NavBar';
import Shop from './Components/Shop/Shop';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import classes from './App.module.scss';

const App = () => {
  return (
    <div className={classes.TestClass}>
      <header>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </header>

      <footer></footer>
    </div>
  );
};

export default App;
