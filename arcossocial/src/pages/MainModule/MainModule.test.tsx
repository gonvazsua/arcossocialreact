import {render} from "@testing-library/react";
import MainModule from "./MainModule";
import {Router} from "react-router";
import {createBrowserHistory} from "history";
import {useLoggedUser} from "../../api/user/UserHooks";
import {RecoilRoot} from "recoil";

jest.mock('../../api/user/UserHooks');
describe('MainModule', () => {

    const history = createBrowserHistory();

    const renderComponent = () => {
        return render(
            <RecoilRoot>
                <Router history={history}>
                    <MainModule />
                </Router>
            </RecoilRoot>
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
