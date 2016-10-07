import expect from 'expect';
import { authorsFormattedFromDropdown } from './selectors';

describe('Author Selectors', () => {
    describe('authorsformattedForDropdown', () => {
        it('should return author data formatted for use in a dropdown', () => {
            const authors = [
                { id: 'jon-doe', firstName: 'Jon', lastName: 'Doe' },
                { id: 'cloud-strife', firstName: 'Cloud', lastName: 'Strife' }
            ];

            const expected = [
                { value: 'jon-doe', text: 'Jon Doe' },
                { value: 'cloud-strife', text: 'Cloud Strife' }
            ];

            expect(authorsFormattedFromDropdown(authors)).toEqual(expected);
        });
    });
});