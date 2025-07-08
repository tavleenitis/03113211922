const fs = require('fs');
const path = require('path');

const logger = (req, res, next) => {
  const log = `${new Date().toISOString()} ${req.method} ${req.originalUrl}\n`;
  fs.appendFile(path.join(__dirname, '../../logs.txt'), log, (err) => {
    if (err) console.error(err);
  });
  next();
};

module.exports = logger;
