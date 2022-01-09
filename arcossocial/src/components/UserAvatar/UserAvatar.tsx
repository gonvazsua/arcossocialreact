import {Avatar, IconButton, ListItemIcon, Menu, MenuItem, Tooltip} from "@mui/material";
import {useState} from "react";
import Logout from '@mui/icons-material/Logout';
import {useRecoilValue, useResetRecoilState} from "recoil";
import {loggedUserAtom} from "../../api/user/UserAtom";
import {useHistory} from "react-router";

export default function UserAvatar(): JSX.Element {

  const [anchorEl, setAnchorEl] = useState(null);
  const loggedUser = useRecoilValue(loggedUserAtom);
  const resetLoggedUser = useResetRecoilState(loggedUserAtom);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getLoggedUserInitial = (): string | undefined => {
    return loggedUser?.fullName?.charAt(0);
  };

  const logout = () => {
    resetLoggedUser();
    history.push('/');
  };

  return (
      <div>
        <Tooltip title="Mi cuenta">
          <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              { getLoggedUserInitial() }
            </Avatar>
          </IconButton>
        </Tooltip>
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Avatar /> Mi cuenta
          </MenuItem>
          <MenuItem onClick={() => logout()}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Desconectar
          </MenuItem>
        </Menu>
      </div>
  );
};