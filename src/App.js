import React from 'react'
import { Link, BrowserRouter ,Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import NamesState from './context/names/NamesState';

function App() {
  return (
    <NamesState>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/"> Home</Link>            
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
          </ul>
          <hr />

          <Routes>
            <Route exact path="/" element = {<Home />}>
            </Route>
            
            <Route path="/about" element = {<About />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </NamesState>
  );
}

export default App