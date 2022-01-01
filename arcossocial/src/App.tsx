import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import MainPage from './pages/MainPage/MainPage';

function App() {
    return (
        <Router>
            <Switch>
                <RestrictedRoute path={'/main'} component={MainPage}/>
                <Route exact path="/">
                    <div>
                        <LoginPage/>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
