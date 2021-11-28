import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Gallery from './Components/Gallery/Gallery';

function App() {
  return (
    <div className='App'>
      <h1>My photo gallery website</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
