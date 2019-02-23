export default {
  addMessage: async (_, { body }, ctx) => {
    return await ctx.prisma.createMessage({ body });
  }
};
