import {render, screen} from "@testing-library/react";
import UserAvatar from "./UserAvatar";
import userEvent from "@testing-library/user-event";

describe('UserAvatar', function () {

    const renderComponent = () => {
        return render(
            <UserAvatar />
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

    test.skip('should show initial of user in the avatar', () => {
        localStorage.clear();
        renderComponent();
        //expect(history.location.pathname).toBe('/');
    });

});