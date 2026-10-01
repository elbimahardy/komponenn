import { Routes, Route } from 'react-router';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Kontak from './components/Kontak';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;