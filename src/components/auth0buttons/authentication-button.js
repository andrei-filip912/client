import React from 'react';
import PropTypes from 'prop-types';

import LoginButton from './login-button';
import LogoutButton from './logout-button';

import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = (props) => {
	const { isAuthenticated, isLoading } = useAuth0();

	return (
		<div data-testid="auth-btn-1">
			{isAuthenticated ? <LogoutButton variant={props.variant} /> : <LoginButton variant={props.variant} />}
		</div>);
};

export default AuthenticationButton;

AuthenticationButton.propTypes = {
	variant : PropTypes.oneOf(['text', 'outlined', 'contained'])
};
