import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import Loading from '../components/Loading';


const Movies = () => {
	const {loading} = useAuth0();
	if(loading){
		return (<Loading/>);
	}

	function openFileDialog(){
		let input = document.createElement('input');
		input.type = 'file';
		input.accept = 'video/mp4,video/*';
		input.onchange = _ => {
			let files =   Array.from(input.files);
			console.log(files); //do something with the files
		};
		input.click();
	}
	function dropHandler(ev) {
		console.log('File(s) dropped');

		// Prevent default behavior (Prevent file from being opened)
		ev.preventDefault();

		if (ev.dataTransfer.items) {
			// Use DataTransferItemList interface to access the file(s)
		} else {
		// Use DataTransfer interface to access the file(s)
		}
		console.log(ev.dataTransfer.items[0]);
	}

	function dragOverHandler(ev) {
		console.log('File(s) in drop zone');

		// Prevent default behavior (Prevent file from being opened)
		ev.preventDefault();
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