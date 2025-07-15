// logger.js - Simple request logger middleware
function logger(req, res, next) {
  // Log method and URL
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

module.exports = logger; 