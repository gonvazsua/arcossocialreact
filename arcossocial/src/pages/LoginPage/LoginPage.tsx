import {Alert, AlertTitle, Snackbar, TextField} from "@mui/material";
import {useState} from "react";
import FormButton from "../../components/FormButton/FormButton";
import {AxiosResponse} from "axios";
import {executeLogin, LoginResponse} from "../../api/login/login";
import {Redirect, useHistory} from "react-router";
import {LocalStorageKey} from "../../util/localStorageKey";

export default function LoginPage (): JSX.Element {

    const [loginButtonDisabled, setLoginButtonDisabled] = useState<boolean>(true);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginIncorrect, setLoginIncorrect] = useState<boolean>(false);
    const history = useHistory();

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

    const handleClickLogin = async () => {
        try {
            const response: AxiosResponse<LoginResponse> = await executeLogin(username, password);
            if(response.status === 200) {
                localStorage.setItem(LocalStorageKey.TOKEN, response.data.token);
                localStorage.setItem(LocalStorageKey.USER_CODE, username);
                localStorage.setItem(LocalStorageKey.PASSWORD, password);
                history.push('/main');
            } else {
                setLoginIncorrect(true);
            }
        } catch (err) {
            setLoginIncorrect(true);
        }
    };
    
    const getLoginPage = () => {
        return (
            <div>
                <TextField id="username" label="Usuario" value={username} variant="outlined" onChange={(event) => handleChangeUsername(event.target.value)}/>
                <TextField id="password" label="Contraseña" value={password} variant="outlined" onChange={(event) => handleChangePassword(event.target.value)}/>
                <FormButton disabled={loginButtonDisabled} onClickFormButton={() => {handleClickLogin()}} displayText={'LOGIN'} />
                <Snackbar open={loginIncorrect} autoHideDuration={1000}>
                    <Alert severity="error">
                        Usuario o contraseña incorrectos
                    </Alert>
                </Snackbar>
            </div>
        );
    };

    const isLoggedIn = () => {
        const authToken = localStorage.getItem(LocalStorageKey.TOKEN);
        return authToken || false;
    };

    return isLoggedIn()
        ? <Redirect to={{ pathname: '/main' }} />
        : getLoginPage();
};