import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../pages/Main";


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Main/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}