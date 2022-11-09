import React, { useState, useEffect } from 'react';

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
					<div key={element._id}>
						<h3>{element.name}</h3>
						<p>{element.url}</p>
					</div>
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