import {render, screen, waitFor} from "@testing-library/react";
import LoginPage from "./LoginPage";
import userEvent from "@testing-library/user-event";
import {Router} from "react-router";
import { createBrowserHistory } from 'history';
import React from "react";

describe('LoginPage', () => {

    const history = createBrowserHistory();

    const renderComponent = () => {
        return render(
            <Router history={history}>
                <LoginPage/>
            </Router>
        );
    };

    afterEach(() => {
        localStorage.clear();
        jest.restoreAllMocks();
    });

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

    test('should redirect to main module when login is success', async () => {
        renderComponent();

        const usernameInput = screen.getByRole('textbox', {name:'Usuario'});
        userEvent.type(usernameInput, 'test');
        const passwordInput = screen.getByRole('textbox', {name:'Contraseña'});
        userEvent.type(passwordInput, 'test');

        const loginButton = screen.getByRole('button', { name: 'LOGIN'});
        userEvent.click(loginButton);

        await waitFor(() => expect(history.location.pathname).toBe('/main'));
    });

    test('should show error message when login is not success', async () => {
        renderComponent();

        const initAlert = screen.queryAllByText(/Usuario o contraseña incorrectos/i );
        expect(initAlert).toHaveLength(0);

        const usernameInput = screen.getByRole('textbox', {name:'Usuario'});
        userEvent.type(usernameInput, 'nonExistingUser');
        const passwordInput = screen.getByRole('textbox', {name:'Contraseña'});
        userEvent.type(passwordInput, 'incorrect password');

        const loginButton = screen.getByRole('button', { name: 'LOGIN'});
        userEvent.click(loginButton);

        const alert = await screen.findAllByText(/Usuario o contraseña incorrectos/i);
        expect(alert).toHaveLength(1);
    });

    test.skip('should redirect to Restricted module if the user is logged', () => {
        jest.spyOn(localStorage, 'getItem');
        renderComponent();

        expect(history.location.pathname).toBe('/main');
    });
});