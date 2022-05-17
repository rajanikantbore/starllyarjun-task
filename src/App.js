import React from 'react'
import { Link, BrowserRouter ,Route, Routes } from 'react-router-dom'
import NamesState from './context/names/NamesState';
import Home from './components/Home';
import About from './components/About';
import DatePick from './components/DatePick';
import Tables from './components/Tables';
import ApiDataTable from './components/ApiDataTable';
import PdfView from './components/PdfView';

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
            <li>
              <Link to="/tables"> Tables</Link>
            </li>
            <li>
              <Link to="/apitables"> ApiTables</Link>
            </li>
            <li>
              <Link to="/pdf"> PdfView</Link>
            </li>
          </ul>
          <hr />

          <Routes>
            <Route exact path="/" element = {<Home />} />
            <Route path="/about" element = {<About />} />
            <Route path="/date" element = {<DatePick />} />
            <Route path="/tables" element = {<Tables />} />
            <Route path="/apitables" element = {<ApiDataTable />} />
            <Route path="/pdf" element = {<PdfView />} />          
          </Routes>
        </div>
      </BrowserRouter>
    </NamesState>
  );
}

export default App