import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from './../../components/Dialogs/Message/Message';

describe('Message component', () => {
    test('renders span with status', () => {
        render(<Message message={'test'} />);
        expect(screen.getByText('test')).toBeInTheDocument();
    }); 
});