import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import VideoCard from './VideoCard';

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
		<>
			<Grid
				container
				spacing={8}
				xs={12}
				style={{ paddingLeft: '5%' }}
			>
				{html}
			</Grid>

		</>
	);
};

export default MovieList;