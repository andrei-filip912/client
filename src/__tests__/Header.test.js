/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen, cleanup} from '@testing-library/react';
import Header from '../components/Header';
import React from 'react';


afterEach(() => {
	cleanup();
});

test('should render Header component', () => {
	render(<Header />);
	const headerElement = screen.getByTestId('header-1');
	expect(headerElement).toBeInTheDocument();
});