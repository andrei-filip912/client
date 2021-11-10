const serverUrl = process.env.REACT_APP_SERVER_URL;



export const callApi = async () => {
	try {
		const response = await fetch(`${serverUrl}/api/messages/public-message`);

		const responseData = await response.json();
    
		return responseData.message;
	} catch (error) {
		return error.message;
	}
};

export const callSecureApi = async (token) => {
	try {
		const response = await fetch(
			`${serverUrl}/api/messages/protected-message`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		const responseData = await response.json();

		return responseData.message;
	} catch (error) {
		return error.message;
	}
};
