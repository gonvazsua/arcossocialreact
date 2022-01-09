import {Route, Switch, useRouteMatch} from "react-router-dom";
import {Redirect} from "react-router";
import React from "react";
import HelpsPage from "./HelpsPage/HelpsPage";
import MenuBar from "../../components/MenuBar/MenuBar";
import {useLoggedUser} from "../../api/user/UserHooks";

export default function MainModule() {

    const { path } = useRouteMatch();
    useLoggedUser();

    return (
        <div>
            <MenuBar />
            <Switch>
                <Route path={`${path}/helps`}>
                    <HelpsPage />
                </Route>
            </Switch>
        </div>
    );
};
