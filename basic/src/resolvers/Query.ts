export default {
  message: async (_, { id }, ctx) => {
    return await ctx.prisma.message({ id });
  },

  messages: async (_, args, ctx) => {
    return await ctx.prisma.messages();
  }
};
