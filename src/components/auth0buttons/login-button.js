import React from 'react';
import PropTypes from 'prop-types';

import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
//s
const LoginButton = (props) => {
	const { loginWithRedirect } = useAuth0();

	return <Button data-testid="login-btn-1" variant={props.variant} onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;

LoginButton.propTypes = {
	variant : PropTypes.oneOf(['text', 'outlined', 'contained'])
};
