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
import {createTheme, ThemeProvider} from "@mui/material";

function App() {
    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
}

const theme = createTheme({
    palette: {
        primary: {
            light: '#2DC4B2FF',
            main: '#26a69a',
            dark: '#0D3834FF',
            contrastText: '#fff',
        },
    },
});

export default App;
