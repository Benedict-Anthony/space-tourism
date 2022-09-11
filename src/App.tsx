import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route, Routes } from "react-router-dom"


import Home from './pages/Home';
import Destinations from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import {useState} from "react"


function App() {
  const [active, setActive] = useState<boolean>(false)

  const toggleBar = () => {
    setActive(!active)
  }
  return (
    <BrowserRouter>
      <Header active={active} func={toggleBar} />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={"/destination"} element={<Destinations />} />
        <Route path={"/crew"} element={<Crew />} />
        <Route path={"/technology"} element={ <Technology/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
