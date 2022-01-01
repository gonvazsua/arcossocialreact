import {Route, Switch, useRouteMatch} from "react-router-dom";
import {Redirect} from "react-router";
import React from "react";
import HelpsPage from "./HelpsPage/HelpsPage";

export default function MainModule() {

    const { path, url } = useRouteMatch();

    return (
        <div>
            <div>Header</div>
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
