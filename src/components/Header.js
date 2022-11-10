import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import Link from "@mui/material/Link";
import AuthenticationButton from './auth0buttons/authentication-button';

// import { useAuth0 } from "@auth0/auth0-react";

export default function MenuAppBar() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div data-testid="header-1">
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<div>
							<IconButton
								size="large"
								edge="start"
								color="inherit"
								aria-label="menu"
								sx={{ mr: 2 }}
								onClick={handleMenu}
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem href="/" component="a" onClick={handleClose}>
									Home
								</MenuItem>
								<MenuItem
									href="movies"
									component="a"
									onClick={handleClose}
								>
									Movies
								</MenuItem>
							</Menu>
						</div>

						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Movie Upload
						</Typography>

						<div>
							<AuthenticationButton variant={'contained'}>
							</AuthenticationButton>
						</div>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
}
