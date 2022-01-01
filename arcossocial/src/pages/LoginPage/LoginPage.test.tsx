import {render, screen, waitFor} from "@testing-library/react";
import LoginPage from "./LoginPage";
import userEvent from "@testing-library/user-event";
import {Router} from "react-router";
import { createBrowserHistory } from 'history';

describe('LoginPage', () => {

    const history = createBrowserHistory();

    const renderComponent = () => {
        return render(
            <Router history={history}>
                <LoginPage/>
            </Router>
        );
    };

    test('should enable login button when username and password are filled', () => {
        renderComponent();

        const loginButton = screen.getByRole('button', { name: 'LOGIN'});
        expect(loginButton).toBeDisabled();

        const usernameInput = screen.getByRole('textbox', {name:'Usuario'});
        userEvent.type(usernameInput, 'test');

        const passwordInput = screen.getByRole('textbox', {name:'Contraseña'});
        userEvent.type(passwordInput, 'test');

        expect(loginButton).toBeEnabled();

    });

    test.skip('should redirect to main page when login is success', async () => {
        renderComponent();

        const usernameInput = screen.getByRole('textbox', {name:'Usuario'});

        userEvent.type(usernameInput, 'test');
        const passwordInput = screen.getByRole('textbox', {name:'Contraseña'});

        userEvent.type(passwordInput, 'test');

        const loginButton = screen.getByRole('button', { name: 'LOGIN'});
        userEvent.click(loginButton);

        await waitFor(() => expect(history.location.pathname).toBe('main'));

    });
});