import React from 'react';
import { render, screen } from '@testing-library/react';
import Shell from './Shell';
test('verify component', () => {
	render(<Shell />);
	const linkElement = screen.getByText(/Shell/i);
	expect(linkElement).toBeInTheDocument();
});
