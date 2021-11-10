import React from 'react';
import PropTypes from 'prop-types';

import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LogoutButton = (props) => {
	const { logout } = useAuth0();

	return (
		<Button data-testid="logout-btn-1"
			variant={props.variant} onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
		</Button>
	);
};

export default LogoutButton;

LogoutButton.propTypes = {
	variant : PropTypes.oneOf(['text', 'outlined', 'contained'])
};
