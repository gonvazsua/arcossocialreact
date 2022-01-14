import {render, screen} from "@testing-library/react";
import HelpsPage from "./HelpsPage";

describe('HelpsPage', () => {

    const renderComponent = () => {
        return render(<HelpsPage />);
    };

    test('should render default values in table', () => {
        renderComponent();

        // const helpsTable = screen.getByRole('table');
        // expect(helpsTable).toBeInTheDocument();
    });

});