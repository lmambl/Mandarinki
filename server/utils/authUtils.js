// require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

const generateTokens = (payload) => ({
  accessToken: jwt.sign(payload, 'a', { expiresIn: jwtConfig.access.expiresIn }),
  refreshToken: jwt.sign(payload, 'r', { expiresIn: jwtConfig.refresh.expiresIn }),
});

module.exports = { generateTokens };
