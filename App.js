import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Eat from './Eat';
import Drink from './Drink';
import NavBar from './NavBar';
import Cigs from './Cigs';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/eat' element={<Eat />} />
          <Route path='/drink' element={<Drink />} />
          <Route path='/cigs' element={<Cigs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
