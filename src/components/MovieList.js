import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

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
					<Card
						key={element._id}
						variant="outlined"
						sx={{ width: '34%' }}
					>
						<CardMedia
						>
							<ReactPlayer
								url={element.url}
								controls={true}
								width='100%'
							/>
						</CardMedia>

						<CardContent>
							<Typography variant="title" color="text.primary">
								{element.name}
							</Typography>
						</CardContent>

					</Card>
				);
			})
		);
	}, [movies]);

	return (
		<div>
			{html}
		</div>
	);
};

export default MovieList;