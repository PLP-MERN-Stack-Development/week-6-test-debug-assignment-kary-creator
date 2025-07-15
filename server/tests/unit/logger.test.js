const logger = require('../../src/middleware/logger');

describe('logger middleware', () => {
  it('calls next and logs the request', () => {
    const req = { method: 'GET', url: '/test' };
    const res = {};
    const next = jest.fn();
    console.log = jest.fn();

    logger(req, res, next);

    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('GET /test'));
    expect(next).toHaveBeenCalled();
  });
}); 