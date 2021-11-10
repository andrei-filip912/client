import React from 'react';
import PropTypes from 'prop-types';

import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const SignupButton = (props) => {
	const { loginWithRedirect } = useAuth0();
	return (
		<Button
			data-testid="signup-btn-1"
			variant={props.variant}
			className="btn btn-primary btn-block"
			onClick={() =>
				loginWithRedirect({
					screen_hint: 'signup',
				})
			}
		>
      Sign Up
		</Button>
	);
};

export default SignupButton;

SignupButton.propTypes = {
	variant : PropTypes.oneOf(['text', 'outlined', 'contained'])
};
