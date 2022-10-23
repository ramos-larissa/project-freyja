import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import "../index.css";

import Home from '../pages/Main';
import Step1 from '../pages/Step1';

function RoutesConfig() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/step1" element={<Step1 />} />
    </Switch>
</BrowserRouter>


  );
}

export default RoutesConfig;