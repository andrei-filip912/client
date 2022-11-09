import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@material-ui/core';
import VideoCard from './VideoCard';
import { Box } from '@material-ui/core';

const MovieList = ({ movies }) => {

	const [html, setHtml] = useState('');

	useEffect(() => {
		if (!movies) {
			setHtml(<p>No movies ...</p>);
			return;
		}

		setHtml(
			movies.map(element => {
				return (
					<Grid
						key={element._id}
						item
						xs={12}
						sm={6}
						md={4}
					>
						<div>
							<VideoCard

								url={element.url}
								name={element.name}
							/>
						</div>
					</Grid>

				);
			})
		);
	}, [movies]);

	return (
		<div>
			<Grid
				container
				spacing={3}
				style={{paddingLeft: '40px', paddingRight: '40px'}}
			>
				{html}
			</Grid>
		</div>
	);
};

export default MovieList;