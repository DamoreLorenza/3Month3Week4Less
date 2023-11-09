
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Article from './components/article';

function App() {
  return (
 <div className="App"> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home textContent="mah" />} />
        {/* <Route path="/article/:id" element={<Article textContent="mah" />} /> */}
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;




