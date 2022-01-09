import {render} from "@testing-library/react";
import MainModule from "./MainModule";
import {Router} from "react-router";
import {createBrowserHistory} from "history";
import {useLoggedUser} from "../../api/user/UserHooks";

jest.mock('../../api/user/UserHooks');
describe('MainModule', () => {

    const history = createBrowserHistory();

    const renderComponent = () => {
        return render(
            <Router history={history}>
                <MainModule />
            </Router>
        );
    };

    beforeEach(() => {
        jest.resetAllMocks();
    })

    test('should load logged user data', () => {
        renderComponent();
        expect(useLoggedUser).toHaveBeenCalled();
    })
});
