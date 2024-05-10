import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './pages/board/header/nav';
import BoardList from './pages/board/list/freeList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/board" element={<BoardList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
