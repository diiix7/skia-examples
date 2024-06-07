import React from 'react';
import { render, screen } from '@testing-library/react';
import Init from './Init';
test('verify component', () => {
	render(<Init />);
	const linkElement = screen.getByText(/Init/i);
	expect(linkElement).toBeInTheDocument();
});
