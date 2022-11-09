import React,{useState, useEffect} from 'react';
import axios, {fetchMovies} from '../utils/axios';
import requests from '../utils/requests';

const MovieList = ({fetchUrl, token}) => {
	const [movies, setMovies] = useState([]);

	useEffect(async () => {
		if(token != '')
		{
			const result = await fetchMovies(fetchUrl, token);
			console.log(result);
			if(result != ([] || undefined))
				setMovies(result);
		}
	}, [token, movies]);
    
	return (
		<div>
			<p>{movies}</p>
		</div>
	);
};

export default MovieList;