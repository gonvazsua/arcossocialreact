import {Route, Switch, useRouteMatch} from "react-router-dom";
import {Redirect} from "react-router";
import React from "react";
import HelpsPage from "./HelpsPage/HelpsPage";
import MenuBar from "../../components/MenuBar/MenuBar";
import {useLoggedUser} from "../../api/user/UserHooks";

export default function MainModule() {

    const { path, url } = useRouteMatch();
    useLoggedUser();

    return (
        <div>
            <MenuBar />
            <Switch>
                <Route path={`${path}/helps`}>
                    <HelpsPage />
                </Route>
                <Route exact path={'/main'}>
                    <Redirect to={`${url}/helps`} />
                </Route>
            </Switch>
        </div>
    );
};
