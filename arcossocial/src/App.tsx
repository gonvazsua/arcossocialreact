import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import MainModule from "./pages/MainModule/MainModule";
import {RecoilRoot} from "recoil";

function App() {
    return (
        <RecoilRoot>
            <Router>
                <Switch>
                    <RestrictedRoute path={'/main'} component={MainModule}/>
                    <Route exact path="/">
                        <LoginPage/>
                    </Route>
                </Switch>
            </Router>
        </RecoilRoot>
    );
}

export default App;
