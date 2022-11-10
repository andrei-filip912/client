import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';


// set default config options
const defaultOptions = {
	baseURL: 'http://localhost:4000/',
	headers: {
		'Content-Type': 'multipart/form-data; boundary=--X--',
	}
};
// create instance
const instance = axios.create(defaultOptions);

// const uploadMovie = (fetchUrl, token, formData) => {
// 	instance.post(

// 	);
// };

// finish getting response from api
export const  fetchMovies = async (fetchUrl, token) => {
	instance.get(fetchUrl,{ headers: {'Authorization': token}});
};

export default instance;