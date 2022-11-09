import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@material-ui/core';
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
					<VideoCard 
						key={element._id}
						url={element.url}
						name={element.name}
					/>
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