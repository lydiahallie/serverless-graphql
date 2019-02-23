export const auth = {
  signup: async (_, { firstName, lastName, email, password }, ctx) => {
    const user = await ctx.prisma.createUser({
      firstName,
      lastName,
      email,
      password
    });

    return {
      token: 'bladibla',
      user
    };
  },

  login: async (_, { email, password }, ctx) => {
    const user = await ctx.prisma.user({ email });
    return {
      token: 'bladibla',
      user
    };
  }
};
