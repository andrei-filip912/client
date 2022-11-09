import React, { useState, useEffect } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import Loading from '../components/Loading';
import axios, { fetchMovies } from '../utils/axios';
import MovieList from '../components/MovieList';
import requests from '../utils/requests';
import {Box} from '@material-ui/core';
import MovieIcon from '@mui/icons-material/Movie';

import '../index.css';

const Movies = () => {

	const { getAccessTokenSilently } = useAuth0();

	const { loading } = useAuth0();
	if (loading) {
		return (<Loading />);
	}

	const [message, setMessage] = useState('');
	const [token, setToken] = useState('');
	const [movies, setMovies] = useState('');

	useEffect(async () => {

		const rawToken = await getAccessTokenSilently({
			audience: 'https://express.sample',
			scope: 'read:current_user'
		});

		setToken('Bearer ' + rawToken);
	}, []);

	useEffect(async () => {
		if (token) {
			// const res = await fetchMovies(requests.fetchMovies, token);
			const { data } = await axios.get('http://localhost:4000/movies', { headers: { 'Authorization': token } });
			console.log(data.result);
			setMovies(data.result);
		}
	}, [token]);

	function openFileDialog() {
		let input = document.createElement('input');
		input.type = 'file';
		input.accept = 'video/mp4';

		input.onchange = _ => {
			const file = Array.from(input.files)[0];
			console.log(file);
			sendToApi(file);
		};
		input.click();
	}
	function dropHandler(ev) {
		// Prevent default behavior (Prevent file from being opened)
		ev.preventDefault();

		if (ev.dataTransfer.items) {
			// Use DataTransferItemList interface to access the file
			const file = ev.dataTransfer.items[0].getAsFile();
			sendToApi(file);
		}
	}
	function dragOverHandler(ev) {
		// Prevent default behavior (Prevent file from being opened)
		ev.preventDefault();
	}
	function validateFormat(file) {
		if (file.type === 'video/mp4')
			return true;
		return false;
	}

	async function sendToApi(file) {
		// making sure the the user submits an mp4 file
		if (validateFormat(file) === false) {
			setMessage('Please only upload videos');
			return null;
		}

		// create formData object for the request body and attach the file to it
		var formData = new FormData();
		formData.append('movie', file);

		// sending the post request o the upload api
		// to refactor for srp
		const fetchUrl = requests.fetchUpload;
		return axios.post(
			'http://localhost:4000/upload',
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data; boundary=--X--',
					'Authorization': token,
				}
			})
			.then(res => {
				setMessage(res.data.message);
			})
			.catch(err => setMessage('Something went wrong :('));
	}
	// figrue out how to fix passing the token to axios.js sicne useState 
	return (
		<div>
			<div>
				<Box
					display="flex"
					justifyContent="flex-end"
					alignItems="flex-end"
					mt={1}
					mb={1}
				>
					<Button
						variant="contained"
						onClick={openFileDialog}
						onDrop={(e) => { dropHandler(e); }}
						onDragOver={(e) => { dragOverHandler(e); }}
						className='inline'
						size='large'
						startIcon={<MovieIcon/>}
						style={{marginRight: '1%'}}
					>
						Upload
					</Button>
				</Box>

				<div id='response' className='inline'>{message}</div>
			</div>
			<MovieList
				movies={movies}
			/>
		</div>
	);
};

export default Movies;