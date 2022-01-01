import {Button} from "@mui/material";

export interface FormButtonProps {
    disabled: boolean;
    onClickFormButton: () => void;
    displayText: string;
};

export default function FormButton (props: FormButtonProps): JSX.Element {

    const { disabled, onClickFormButton, displayText } = props;

    return (
        <Button variant={'contained'} disabled={disabled} onClick={() => onClickFormButton()}>
            {displayText}
        </Button>
    );
}