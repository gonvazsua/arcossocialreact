import {render, screen} from "@testing-library/react";
import FormButton from "./FormButton";
import userEvent from "@testing-library/user-event";

describe('FormButton',  () => {

    test('should disable button based on input props', () => {
        const onClickMock = jest.fn();
        render(<FormButton displayText={'TEST'} disabled={true} onClickFormButton={onClickMock} />);

        const button = screen.getByRole('button', { name: 'TEST' });
        expect(button).toBeDisabled();
    });

    test('should enable button based on input props', () => {
        const onClickMock = jest.fn();
        render(<FormButton displayText={'TEST'} disabled={false} onClickFormButton={onClickMock} />);

        const button = screen.getByRole('button', { name: 'TEST' });
        expect(button).toBeEnabled();
    });

    test('should call onchange input function when clicking', () => {
        const onClickMock = jest.fn();
        render(<FormButton displayText={'TEST'} disabled={false} onClickFormButton={onClickMock} />);

        const button = screen.getByRole('button', { name: 'TEST' });
        userEvent.click(button);

        expect(onClickMock).toBeCalled();
    });

});