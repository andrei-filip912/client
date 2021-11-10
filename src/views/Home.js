import React from 'react';
import { Button } from '@mui/material';
import SignupButton from '../components/auth0buttons/signup-button';
import { useAuth0 } from '@auth0/auth0-react';

function Content() {
	const { isAuthenticated } = useAuth0();

	return (
		<div className="">
			<p>Let&apos;s get started</p>
			{isAuthenticated ? <Button variant="outlined">Let&apos;s goo</Button>
				: <SignupButton variant="text"></SignupButton>}
		</div>
	);
}

export default Content;
