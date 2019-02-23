import { sign } from 'jsonwebtoken';

import { catchErrors } from '../../../utils/error';
import {
  hashPassword,
  validatePassword,
  validateEmail,
  comparePassword
} from '../../../utils/auth';

interface Token {
  token: string;
}

export const auth = {
  signup: catchErrors(async (_, { firstName, lastName, email, password }, ctx) => {
    const validEmail = validateEmail(email);
    if (!validEmail) {
      throw new Error('Unvalid email.');
    }

    const validPassword = validatePassword(password);
    if (!validPassword) {
      throw new Error('The password is too short.');
    }

    const duplicateEmail = await ctx.prisma.users({ where: { email } });
    if (duplicateEmail.length > 0) {
      throw new Error('There is already an account with this email address.');
    }

    const user = await ctx.prisma.createUser({
      firstName,
      lastName,
      email,
      password: hashPassword(password)
    });

    const token: Token = sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1y'
    });

    return {
      token,
      user
    };
  }),

  login: catchErrors(async (_, { email, password }, ctx) => {
    const user = await ctx.prisma.user({ email });
    if (!user) {
      throw new Error('There is no account with that email address.');
    }

    const validPassword = await comparePassword(password, user.password);
    if (!validPassword) {
      throw new Error('The password is incorrect');
    }

    const token: Token = sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1y'
    });

    return {
      token,
      user
    };
  })
};
