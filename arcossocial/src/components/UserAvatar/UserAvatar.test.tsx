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

    const loggedUser: User = mockData.loggedUser[0];
    const history = createBrowserHistory();

    const renderComponent = () => {
        return render(
            <RecoilRoot initializeState={(snap) => {
                snap.set(loggedUserAtom, loggedUser)
            }}>
                <UserAvatar />
            </RecoilRoot>
        );
    };

    const renderComponentWithRouter = () => {
        return render(
            <RecoilRoot initializeState={(snap) => {
                snap.set(loggedUserAtom, loggedUser)
            }}>
                <Router history={history}>
                    <UserAvatar />
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

    test('should redirect to login page when logout', async () => {
        renderComponentWithRouter();

        const accountButton = screen.getByRole('button', {name: 'Mi cuenta'});
        userEvent.click(accountButton);

        const logoutButton = screen.getByRole('menuitem', { name: /desconectar/i});
        userEvent.click(logoutButton);

        await waitFor(() => expect(logoutButton).not.toBeInTheDocument());

        await waitFor(() => expect(history.location.pathname).toBe('/'));
    });

});