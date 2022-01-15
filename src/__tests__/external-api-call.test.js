/* eslint-disable no-undef */
import { callApi, callSecureApi } from '../utils/external-api-call';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';

afterEach(() => {
	jest.resetModules();
});

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () =>
			Promise.resolve({
				message:
          'The API doesn\'t require an access token to share this message.',
			}),
	})
);


describe('callApi tests', () => {
	it('get a message', async () => {
		const message = await callApi();

		expect(message).toEqual(
			'The API doesn\'t require an access token to share this message.'
		);
		expect(fetch).toHaveBeenCalledTimes(1);
	});

	it('exception handle', async () => {
		fetch.mockImplementationOnce(() =>
			Promise.reject({ message: 'Failed to fetch.' })
		);
		const message = await callApi();

		expect(message).toEqual('Failed to fetch.');
		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith(
			`${process.env.REACT_APP_SERVER_URL}/api/messages/public-message`
		);
	});
});

describe('callSecureApi tests', () => {
	it('get a message', async () => {
		fetch.mockImplementationOnce(() =>
			Promise.resolve({
				json:() => Promise.resolve({
					message:
          'API works.',
				}),
			})
		);
		const message = await callSecureApi('mock token');

		expect(message).toEqual(
			'API works.'
		);
		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith(
			`${process.env.REACT_APP_SERVER_URL}/api/messages/protected-message`,  {'headers': {'Authorization': 'Bearer mock token'}}
		);
	});

	it('exception handle', async () => {
		fetch.mockImplementationOnce(() =>
			Promise.reject({ message: 'Failed to fetch.' })
		);
		const message = await callSecureApi('mock token');

		expect(message).toEqual('Failed to fetch.');
		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith(
			`${process.env.REACT_APP_SERVER_URL}/api/messages/protected-message`,  {'headers': {'Authorization': 'Bearer mock token'}}
		);
	});
});
