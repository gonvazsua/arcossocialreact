import {Box, Tooltip, Typography} from "@mui/material";
import UserAvatar from "../UserAvatar/UserAvatar";
import {
    Link, useRouteMatch
} from "react-router-dom";
import {useResetRecoilState} from "recoil";
import {loggedUserAtom} from "../../api/user/UserAtom";
import {useHistory} from "react-router";

export default function MenuBar(): JSX.Element {

    const resetLoggedUser = useResetRecoilState(loggedUserAtom);
    const history = useHistory();

    const handleLogout = () => {
        resetLoggedUser();
        localStorage.clear();
        history.push('/');
    };

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Link to="">
                    <Typography sx={{ minWidth: 100 }}>
                        Ayudas
                    </Typography>
                </Link>
                <Link to="">
                    <Typography sx={{ minWidth: 100 }}>
                        Beneficiarios
                    </Typography>
                </Link>
                <UserAvatar logoutHandler={handleLogout} />
            </Box>
        </div>
    );
};