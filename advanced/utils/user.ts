const { verify } = require('jsonwebtoken');

interface Token {
  id: string;
}

export const verifyUserToken = ctx => {
  const auth = ctx.event.headers['Authorization'];

  if (auth) {
    const token: string = auth.replace('Bearer ', '');
    const verifiedToken: Token = verify(token, process.env.JWT_SECRET);
    return verifiedToken;
  }
};
