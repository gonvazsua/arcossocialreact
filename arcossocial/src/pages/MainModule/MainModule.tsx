import {Route, Switch, useRouteMatch} from "react-router-dom";
import {Redirect} from "react-router";
import React from "react";
import HelpsPage from "./HelpsPage/HelpsPage";
import MenuBar from "../../components/MenuBar/MenuBar";

export default function MainModule() {

    const { path } = useRouteMatch();

    return (
        <div>
            <MenuBar />
            <Switch>
                <Route path={`${path}/helps`}>
                    <HelpsPage />
                </Route>
                <Route path={path}>
                    <Redirect to={`${path}/helps`} />
                </Route>
            </Switch>
        </div>
    );
};
