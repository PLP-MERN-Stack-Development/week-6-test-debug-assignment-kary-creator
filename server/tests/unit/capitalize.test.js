const capitalize = require('../../src/utils/capitalize');

describe('capitalize utility', () => {
  it('capitalizes the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('a')).toBe('A');
    expect(capitalize('')).toBe('');
  });
}); 