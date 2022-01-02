import {render, screen} from "@testing-library/react";
import MenuBar from "./MenuBar";

describe('MenuBar', () => {

    test('should render menu links and user avatar', () => {
        render(<MenuBar />);

        const helpsMenu = screen.getByText('Ayudas');
        const beneficiaryMenu = screen.getByText('Beneficiarios');
        const accountButton = screen.getByRole('button', {name: 'Mi cuenta'});

        expect(helpsMenu).toBeInTheDocument();
        expect(beneficiaryMenu).toBeInTheDocument();
        expect(accountButton).toBeInTheDocument();
    });
});