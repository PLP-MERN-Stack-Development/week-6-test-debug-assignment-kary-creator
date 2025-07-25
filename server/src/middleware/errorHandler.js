// errorHandler.js - Global error handler middleware for Express
function errorHandler(err, req, res, next) {
  console.error('Global error handler:', err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
}

module.exports = errorHandler; 