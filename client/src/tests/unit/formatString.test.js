import { toTitleCase } from '../../utils/formatString';

describe('toTitleCase utility', () => {
  it('converts a string to title case', () => {
    expect(toTitleCase('hello world')).toBe('Hello World');
    expect(toTitleCase('TESTING title CASE')).toBe('Testing Title Case');
    expect(toTitleCase('a')).toBe('A');
    expect(toTitleCase('')).toBe('');
  });
}); 