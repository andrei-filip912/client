/* eslint-disable */
import React from 'react';
import { Button } from '@mui/material';
import SignupButton from '../components/auth0buttons/signup-button';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Card, Grid } from '@mui/material';
import { Link } from '@mui/material';

import MovieImg from '../img/movie.svg';
import CloudImg from '../img/cloud.svg';
import ShareImg from '../img/share.svg';
import UsbImg from '../img/usb.svg';
import ScaleImg from '../img/scalability.svg';

import InfoCard from '../components/InfoCard';


function Content() {
	const { isAuthenticated } = useAuth0();

	return (
		<div className='main-child light-blue-bgr'>
			<div className='top'>
				<div className='landing-text'>
					<h1 className='landing-title'>Store your memories in a safe place and access then anytime from anywhere!</h1>
					<p>Cloud based video library</p>
					{
						isAuthenticated ?
							<Button variant="contained" className=''>
								<Link href="movies" style={{ color: 'white' }} underline="none"
								>
									Let&apos;s go
								</Link>
							</Button>
							:
							<SignupButton variant="contained"></SignupButton>
					}
				</div>
				<div className='landing-image'>
					<img src={MovieImg} style={{ color: 'white' }}></img>
				</div>
			</div>
			<div className='bottom'>
				<Grid
					container
					columnSpacing={12}
					sx={{  alignItems: "center",
					justifyContent: "center" }}
				>
					<Grid item>
						<div>
							<InfoCard
								title='Accessibility'
								text='Your movies can be accessed from any device, anywhere!'
								img={CloudImg}
							/>
						</div>
					</Grid>
					<Grid item>
						<div>
							<InfoCard
								title='Sharing is caring'
								text='You can share your videos, without worrying about size.'
								img={ShareImg}
							/>
						</div>
					</Grid>
					<Grid item>
						<div>
							<InfoCard
								title='Safety'
								text='You may loose a flash drive, but you will always find your files here.'
								img={UsbImg}
							/>
						</div>
					</Grid>
					<Grid item>
						<div>
							<InfoCard
								title='Scalability'
								text='If you need more space, you can upgrade at any given time.'
								img={ScaleImg}
							/>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Content;
