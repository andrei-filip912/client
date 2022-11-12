/* eslint-disable */
import React from 'react';
import { Button } from '@mui/material';
import SignupButton from '../components/auth0buttons/signup-button';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Grid } from '@material-ui/core';
import { Link } from '@mui/material';



function Content() {
	const { isAuthenticated } = useAuth0();

	return (
		<div className='main-child'>

		</div>

		// <div className="">
		// 				<p>Let&apos;s get you started</p>
		// 				{
		// 					isAuthenticated ?
		// 						<Button variant="outlined">
		// 							<Link href="movies"
		// 							>
		// 								Let&apos;s go
		// 							</Link>
		// 						</Button>
		// 						:
		// 						<SignupButton variant="text"></SignupButton>
		// 				}
		// </div>
	);
}

export default Content;
