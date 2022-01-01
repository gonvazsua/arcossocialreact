import {Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";

export default function MainModule() {
    return (
        <div>
            <div>Header</div>
            <Switch>
                <Route path="/">
                    <Redirect to="/main/helps" />
                </Route>
            </Switch>
        </div>
    );
};
