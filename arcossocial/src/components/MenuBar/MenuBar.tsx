import {Box, Tooltip, Typography} from "@mui/material";
import UserAvatar from "../UserAvatar/UserAvatar";
import {
    Link
} from "react-router-dom";

export default function MenuBar(): JSX.Element {
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
                <UserAvatar />
            </Box>
        </div>
    );
};