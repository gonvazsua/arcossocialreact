import {
    Alert,Box, Button,
    Card, CardActions,
    CardContent, Checkbox,
    FormControlLabel,
    Grid,
    Snackbar,
    TextField
} from "@mui/material";
import {useState} from "react";
import {AxiosResponse} from "axios";
import {executeLogin, LoginResponse} from "../../api/login/login";
import {Redirect, useHistory} from "react-router";
import {LocalStorageKey} from "../../util/localStorageKey";
import Logo from '../../images/ArcosSocial_Color.svg';
import {AccountCircle, Lock} from "@mui/icons-material";

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
            <Grid container spacing={2}>
                <Grid item xs={3} md={3} xl={3} />
                <Grid item xs={6} md={6} xl={6}>
                    <Card variant="outlined">
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12} xl={12} textAlign={'center'}>
                                    <img src={Logo} width={200} alt={'Arcos social'} />
                                </Grid>
                                <Grid item xs={12} md={2} xl={2} />
                                <Grid item xs={12} md={8} xl={8}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                        <TextField
                                            id="username"
                                            label="Usuario"
                                            value={username}
                                            variant="standard"
                                            onChange={(event) => handleChangeUsername(event.target.value)}
                                            fullWidth
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={2} xl={2} />
                                <Grid item xs={12} md={2} xl={2} />
                                <Grid item xs={12} md={8} xl={8}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }} >
                                        <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                        <TextField
                                            id="password"
                                            label="Contraseña"
                                            value={password}
                                            variant="standard"
                                            onChange={(event) => handleChangePassword(event.target.value)}
                                            fullWidth
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={2} xl={2} />
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={2} xl={2} />
                                <Grid item xs={12} md={4} xl={4} alignContent={'start'}>
                                    <FormControlLabel
                                        control={ <Checkbox defaultChecked /> }
                                        label="Permanecer conectado"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} xl={4} textAlign={'right'}>
                                    <Button
                                        disabled={loginButtonDisabled}
                                        onClick={() => {handleClickLogin()}}
                                        variant={'contained'}
                                        color={'primary'}
                                    >
                                        LOGIN
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={2} xl={2} />
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3} md={3} xl={3} />
                <Snackbar open={loginIncorrect} autoHideDuration={1000}>
                    <Alert severity="error">
                        Usuario o contraseña incorrectos
                    </Alert>
                </Snackbar>
            </Grid>
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