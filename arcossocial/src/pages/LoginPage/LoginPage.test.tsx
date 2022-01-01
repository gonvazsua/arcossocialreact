import {render, screen} from "@testing-library/react";
import LoginPage from "./LoginPage";
import userEvent from "@testing-library/user-event";

describe('LoginPage', () => {

    const renderComponent = () => {
        return render(<LoginPage/>);
    };

    test('should enable login button when username and password are filled', () => {
        renderComponent();

        const loginButon = screen.getByRole('button', { name: 'LOGIN'})
        expect(loginButon).toBeDisabled();

        const usernameInput = screen.getByRole('textbox', {name:'Usuario'});
        userEvent.type(usernameInput, 'test');

        const passwordInput = screen.getByRole('textbox', {name:'Contraseña'});
        userEvent.type(passwordInput, 'test');

        expect(loginButon).toBeEnabled();

    });
});