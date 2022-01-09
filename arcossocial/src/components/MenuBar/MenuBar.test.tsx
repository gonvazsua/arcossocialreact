import {render, screen} from "@testing-library/react";
import MenuBar from "./MenuBar";
import UserAvatar from "../UserAvatar/UserAvatar";
import {RecoilRoot} from "recoil";
import {Router} from "react-router";
import {createBrowserHistory} from "history";

describe('MenuBar', () => {

    const history = createBrowserHistory();

    test('should render menu links and user avatar', () => {
        render(
            <RecoilRoot>
                <Router history={history}>
                    <MenuBar />
                </Router>
            </RecoilRoot>
        );

        const helpsMenu = screen.getByRole('link', { name: 'Ayudas'});
        const beneficiaryMenu = screen.getByRole('link', { name: 'Beneficiarios'});
        const accountButton = screen.getByRole('button', {name: 'Mi cuenta'});

        expect(helpsMenu).toBeInTheDocument();
        expect(beneficiaryMenu).toBeInTheDocument();
        expect(accountButton).toBeInTheDocument();
    });
});