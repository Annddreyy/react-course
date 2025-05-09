import { render, screen } from '@testing-library/react';
import ProfileStatus from '../../components/Profile/ProfileInfo/ProfileStatus/ProfileStatus';

describe('ProfileStatus component', () => {
    test('renders span with status', () => {
        render(<ProfileStatus status="Hello" updateStatus={() => {}} />);
        expect(screen.getByDisplayValue('Hello')).toBeInTheDocument();
    }); 
});