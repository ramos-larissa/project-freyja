import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Main'

function RoutesConfig() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>


  );
}

export default RoutesConfig;