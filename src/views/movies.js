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

	return (
		<div>
			<Button
				variant="contained"
				onClick={openFileDialog}>
                    Upload
			</Button>
		</div>
	);
};

export default Movies;