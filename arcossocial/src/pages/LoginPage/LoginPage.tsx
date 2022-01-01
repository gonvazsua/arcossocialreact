import {TextField} from "@mui/material";
import {useState} from "react";
import FormButton from "../../components/FormButton/FormButton";

export default function LoginPage (): JSX.Element {

    const [loginButtonDisabled, setLoginButtonDisabled] = useState<boolean>(true);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleChangeUsername = (value: string) => {
        setUsername(value);
        updateButtonStatus();
    }

    const handleChangePassword = (value: string) => {
        setPassword(value);
        updateButtonStatus()
    }

    const updateButtonStatus = () => {
        if(username && password) {
            setLoginButtonDisabled(false);
        } else {
            setLoginButtonDisabled(true);
        }
    };

    return (
        <div>
            <TextField id="username" label="Usuario" value={username} variant="outlined" onChange={(event) => handleChangeUsername(event.target.value)}/>
            <TextField id="password" label="Contraseña" value={password} variant="outlined" onChange={(event) => handleChangePassword(event.target.value)}/>
            <FormButton disabled={loginButtonDisabled} onClickFormButton={() => {}} displayText={'LOGIN'} />
        </div>
    );
};