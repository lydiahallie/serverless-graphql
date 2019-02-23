export default {
  user: async (_, { id }, ctx) => {
    return await ctx.prisma.user({ id });
  },

  users: async (_, args, ctx) => {
    return await ctx.prisma.users();
  }
};
