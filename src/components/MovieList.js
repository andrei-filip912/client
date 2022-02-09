import React,{useState, useEffect} from 'react';
import axios, {fetchMovies} from '../utils/axios';
import requests from '../utils/requests';

const MovieList = ({fetchUrl, token}) => {
	const [movies, setMovies] = useState([]);

	useEffect(async () => {
		if(token != '')
		{
			const result = await fetchMovies(fetchUrl, token);
			if(result != ([] || undefined))
				setMovies(result);
		}
	}, [token]);
    
	return (
		<div>
			<p>{movies ? movies :'No movies...'}</p>
		</div>
	);
};

export default MovieList;