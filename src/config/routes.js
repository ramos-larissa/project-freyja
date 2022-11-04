import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import "../index.css";

import Error from "../pages/Error";
import Home from "../pages/Main";
import Step1 from "../pages/Step1";
import Step2 from "../pages/Step2";
import Step3 from "../pages/Step3";
import Step4 from "../pages/Step4";

function RoutesConfig() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/step1" element={<Step1 />} />
        <Route exact path="/step2" element={<Step2 />} />
        <Route exact path="/step3" element={<Step3 />} />
        <Route exact path="/step4" element={<Step4 />} />
        <Route exact path="/error" element={<Error/>} />
      </Switch>
    </BrowserRouter>
  );
}

export default RoutesConfig;
