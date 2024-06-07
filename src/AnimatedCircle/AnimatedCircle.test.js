import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimatedCircle from './AnimatedCircle';
test('verify component', () => {
	render(<AnimatedCircle />);
	const linkElement = screen.getByText(/AnimatedCircle/i);
	expect(linkElement).toBeInTheDocument();
});
