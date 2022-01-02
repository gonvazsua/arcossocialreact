import {render, screen} from "@testing-library/react";
import MenuBar from "./MenuBar";

describe('MenuBar', () => {

    test('should render menu links', () => {
        render(<MenuBar />);

        const helpsMenu = screen.getByText('Ayudas');
        const beneficiaryMenu = screen.getByText('Beneficiarios');

        expect(helpsMenu).toBeInTheDocument();
        expect(beneficiaryMenu).toBeInTheDocument();
    });
});