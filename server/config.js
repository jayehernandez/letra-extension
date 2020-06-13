const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY,
  port: process.env.PORT,
};
