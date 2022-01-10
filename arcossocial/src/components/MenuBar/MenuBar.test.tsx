import {render, screen, waitFor} from "@testing-library/react";
import MenuBar from "./MenuBar";
import UserAvatar from "../UserAvatar/UserAvatar";
import {RecoilRoot} from "recoil";
import {Router} from "react-router";
import {createBrowserHistory} from "history";
import userEvent from "@testing-library/user-event";

describe('MenuBar', () => {

    const history = createBrowserHistory();

    const renderComponent = () => {
        history.push('/main');
        return render(
            <RecoilRoot>
                <Router history={history}>
                    <MenuBar />
                </Router>
            </RecoilRoot>
        );
    };

    test('should render menu links and user avatar', () => {

        renderComponent();

        const helpsMenu = screen.getByRole('link', { name: 'Ayudas'});
        const beneficiaryMenu = screen.getByRole('link', { name: 'Beneficiarios'});
        const accountButton = screen.getByRole('button', {name: 'Mi cuenta'});

        expect(helpsMenu).toBeInTheDocument();
        expect(beneficiaryMenu).toBeInTheDocument();
        expect(accountButton).toBeInTheDocument();
    });

    test('should redirect to login when clicking on Logout button', async () => {
        renderComponent();

        const accountButton = screen.getByRole('button', {name: 'Mi cuenta'});
        userEvent.click(accountButton);

        const logoutButton = screen.getByRole('menuitem', { name: /desconectar/i});
        userEvent.click(logoutButton);

        await waitFor(() => expect(history.location.pathname).toBe('/'));
    });

    test('should redirect to my account when clicking on My Account button', async () => {
        renderComponent();

        const accountButton = screen.getByRole('button', {name: 'Mi cuenta'});
        userEvent.click(accountButton);

        const myAccountLink = screen.getByRole('menuitem', { name: 'Mi cuenta' });
        userEvent.click(myAccountLink);

        expect(history.location.pathname).toContain('profile');
    });
});