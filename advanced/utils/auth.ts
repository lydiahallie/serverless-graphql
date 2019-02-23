'use strict';

require('dotenv').config();
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

function HMAC(password) {
  return crypto
    .createHmac('sha512', process.env.SHARED_KEY)
    .update(password)
    .digest('hex');
}

export const hashPassword = password => {
  const SALT_ROUNDS = 10;

  const salt = bcrypt.genSaltSync(SALT_ROUNDS);
  const HMACpassword = HMAC(password);

  return bcrypt.hashSync(HMACpassword, salt);
};

export const comparePassword = async (password, hash) => {
  const HMACpassword = HMAC(password);
  return await bcrypt.compare(HMACpassword, hash);
};

export const validateEmail = email => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export const validatePassword = password => {
  return password.length >= 6;
};
