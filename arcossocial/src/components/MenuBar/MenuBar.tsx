import {Box, Tooltip, Typography} from "@mui/material";

export default function MenuBar(): JSX.Element {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{ minWidth: 100 }}>Ayudas</Typography>
                <Typography sx={{ minWidth: 100 }}>Beneficiarios</Typography>
            </Box>
        </div>
    );
};