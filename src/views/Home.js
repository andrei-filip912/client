import React from 'react';
import { Button } from '@mui/material';
import SignupButton from '../components/auth0buttons/signup-button';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Grid } from '@material-ui/core';
import { Link } from '@mui/material';
function Content() {
	const { isAuthenticated } = useAuth0();

	return (
		<div
			style={{ backgroundColor: '#afc6f0' }}
		>
			<Grid
				container
				direction="column"
				alignment="center"
				justifyContent="center"
				style={{ minHeight: '87vh' }}
			>
				<Grid item>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						alignContent="center"
						mt={1}
						mb={1}
					>
						<div
							className="">
							<p>Let&apos;s get you started</p>
							{
								isAuthenticated ?
									<Button variant="outlined">
										<Link href="movies"
										>
											Let&apos;s go
										</Link>
									</Button>
									:
									<SignupButton variant="text"></SignupButton>
							}
						</div>
					</Box>
				</Grid>
			</Grid>
		</div>


	);
}

export default Content;
