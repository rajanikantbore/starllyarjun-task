import React from 'react'
import { Link, BrowserRouter ,Route, Routes } from 'react-router-dom'
import NamesState from './context/names/NamesState';
import Home from './components/Home';
import About from './components/About';
import DatePick from './components/DatePick';

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
            <li>
              <Link to="/date"> Date Picker</Link>
            </li>

          </ul>
          <hr />

          <Routes>
            <Route exact path="/" element = {<Home />} />
            <Route path="/about" element = {<About />} />
            <Route path="/date" element = {<DatePick />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NamesState>
  );
}

export default App