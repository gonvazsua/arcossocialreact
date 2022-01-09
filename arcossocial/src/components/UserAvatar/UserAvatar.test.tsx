import {render, screen, waitFor} from "@testing-library/react";
import UserAvatar from "./UserAvatar";
import userEvent from "@testing-library/user-event";
import {RecoilRoot} from "recoil";
import {loggedUserAtom} from "../../api/user/UserAtom";
import {mockData} from "../../mocks/mockData";
import {User} from "../../api/user/user";
import {Router} from "react-router";
import {createBrowserHistory} from "history";

describe('UserAvatar', function () {

    const logoutHandler = jest.fn();
    const myAccountHandler = jest.fn();

    const loggedUser: User = mockData.loggedUser[0];
    const history = createBrowserHistory();

    const renderComponent = () => {
        return render(
            <RecoilRoot initializeState={(snap) => {
                snap.set(loggedUserAtom, loggedUser)
            }}>
                <UserAvatar logoutHandler={logoutHandler} myAccountHandler={myAccountHandler} />
            </RecoilRoot>
        );
    };

    const renderComponentWithRouter = () => {
        return render(
            <RecoilRoot initializeState={(snap) => {
                snap.set(loggedUserAtom, loggedUser)
            }}>
                <Router history={history}>
                    <UserAvatar logoutHandler={logoutHandler} myAccountHandler={myAccountHandler} />
                </Router>
            </RecoilRoot>
        );
    };

    test('should render menu when clicking on the first letter of the user name button', () => {
        renderComponent();
        const accountButton = screen.getByRole('button', {name: 'Mi cuenta'});
        expect(accountButton).toBeInTheDocument();

        userEvent.click(accountButton);

        const myAccountLink = screen.getByRole('menuitem', {name: 'Mi cuenta'});
        const logoutLink = screen.getByRole('menuitem', {name: 'Desconectar'});

        expect(myAccountLink).toBeInTheDocument();
        expect(logoutLink).toBeInTheDocument();
    });

    test('should render the inital letter of the logged user name', () => {
        renderComponent();
        const expectedInitial = mockData.loggedUser[0].fullName.charAt(0);
        const profileButton = screen.getByRole('button', {
            name: /mi cuenta/i
        });
        expect(profileButton.textContent).toBe(expectedInitial);
    });

    test('should call to logout handler when clicking on logout button', async () => {
        renderComponentWithRouter();

        const accountButton = screen.getByRole('button', {name: 'Mi cuenta'});
        userEvent.click(accountButton);

        const logoutButton = screen.getByRole('menuitem', { name: /desconectar/i});
        userEvent.click(logoutButton);

        expect(logoutHandler).toHaveBeenCalled();
    });

    test('should call to my account handler when clicking on my account button', async () => {
        renderComponentWithRouter();

        const accountButton = screen.getByRole('button', {name: 'Mi cuenta'});
        userEvent.click(accountButton);

        const myAccountLink = screen.getByRole('menuitem', {name: 'Mi cuenta'});
        userEvent.click(myAccountLink);

        expect(myAccountHandler).toHaveBeenCalled();
    });

});