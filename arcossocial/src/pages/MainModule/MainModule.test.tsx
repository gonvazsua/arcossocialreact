import {render} from "@testing-library/react";
import MainModule from "./MainModule";
import {Router} from "react-router";
import {createBrowserHistory} from "history";


describe('MainModule', () => {

    const history = createBrowserHistory();

    const renderComponent = () => {
        return render(
            <Router history={history}>
                <MainModule />
            </Router>
        );
    };

    test.skip('should render help page and header', () => {
        renderComponent();
        expect(history.location.pathname).toBe('/main/helps');
    })
});
