import React from 'react';
import { render, screen } from '@testing-library/react';
import Example from './Example';
test('verify component', () => {
	render(<Example />);
	const linkElement = screen.getByText(/Example/i);
	expect(linkElement).toBeInTheDocument();
});
