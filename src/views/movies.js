import React,	{useState, useEffect} from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import Loading from '../components/Loading';
import axios from 'axios';

const Movies = () => {
	// const[token, setToken] = React.useState('');
	const { getAccessTokenSilently } = useAuth0();
	// const { user } = useAuth0();

	// useEffect(async () => {
	// const stringToken = 'Bearer ' + await getAccessTokenSilently({
	// 	audience: 'https://express.sample',
	// 	scope: 'read:current_user'
	// });
	// 	setToken(stringToken);
	// }, []);

	const {loading} = useAuth0();
	if(loading){
		return (<Loading/>);
	}

	async function getTokeString() {
		return 'Bearer ' + await getAccessTokenSilently({
			audience: 'https://express.sample',
			scope: 'read:current_user'
		});
	}
	function openFileDialog(){
		let input = document.createElement('input');
		input.type = 'file';
		// input.accept = 'video/mp4,video/*';

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

	async function sendToApi(file) {
		// create formData object for the request body and attach the file to it
		var formData = new FormData();
		formData.append('image', file);

		// sending the post request o the upload api
		return axios.post(
			'http://localhost:4000/upload',
			formData,
			{
				headers : {
					'Content-Type': 'multipart/form-data; boundary=--X--',
					'Authorization': await getTokeString(),
				}
			})
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}

	return (
		<div>
			<Button
				variant="contained"
				onClick={openFileDialog}
				onDrop={(e) => {dropHandler(e);}}
				onDragOver={(e) => {dragOverHandler(e);}}
			>
                    Upload
			</Button>
		</div>
	);
};

export default Movies;