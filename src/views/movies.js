/* eslint-disable */
import React, { useState, useEffect } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import Loading from '../components/Loading';
import axios from '../utils/axios';
import MovieList from '../components/MovieList';
import requests from '../utils/requests';
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
		updateMovies();
	}, [token, message]);

	useEffect(() => {
		if(message != '') {
			alert(message);
			updateMovies();
		}
	}, [message])

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

	async function updateMovies() {
		if (token) {
			const { data } = await axios.get('http://localhost:4000/movies', { headers: { 'Authorization': token } });
			setMovies(data.result);
		}
	}

	return (
		<div className='main-child'>
			<div
				className='upload-btn'
			>
				<Button
					variant="contained"
					onClick={openFileDialog}
					onDrop={(e) => { dropHandler(e); }}
					onDragOver={(e) => { dragOverHandler(e); }}
					className=' inline'
					size='large'
					startIcon={<MovieIcon />}
				>
					Upload
				</Button>
			</div>


			<MovieList
				movies={movies}
			/>
		</div>

	);
};

export default Movies;