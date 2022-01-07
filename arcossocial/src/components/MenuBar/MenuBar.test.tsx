import {render, screen} from "@testing-library/react";
import MenuBar from "./MenuBar";
import UserAvatar from "../UserAvatar/UserAvatar";
import {RecoilRoot} from "recoil";

describe('MenuBar', () => {

    test('should render menu links and user avatar', () => {
        render(
            <RecoilRoot>
                <MenuBar />
            </RecoilRoot>
        );

        const helpsMenu = screen.getByText('Ayudas');
        const beneficiaryMenu = screen.getByText('Beneficiarios');
        const accountButton = screen.getByRole('button', {name: 'Mi cuenta'});

        expect(helpsMenu).toBeInTheDocument();
        expect(beneficiaryMenu).toBeInTheDocument();
        expect(accountButton).toBeInTheDocument();
    });
});