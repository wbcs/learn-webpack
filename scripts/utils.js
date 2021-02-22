const path = require('path');

function relative(pathname) {
  return path.resolve(__dirname, pathname);
}

module.exports = {
  relative,
};
