import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { SideBar } from './components/navbar/sidebar/SideBar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skill } from './pages/Skill';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { MenuBar } from './components/navbar/mnavbar/MenuBar';
import { LogoMB } from './components/navbar/Logo';

function App() {

  return (
    <div className="App">
      <Router basename='/'>
        <SideBar />
        <LogoMB />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
