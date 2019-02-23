import { catchErrors } from '../../utils/error';
import { verifyUserToken } from '../../utils/user';

interface Token {
  id: string;
}

export default {
  me: catchErrors(async (_, args, ctx, info) => {
    const { id } = verifyUserToken(ctx) as Token;
    return await ctx.prisma.user({ id });
  }),

  user: catchErrors(async (_, { id }, ctx) => {
    return await ctx.prisma.user({ id });
  }),

  users: catchErrors(async (_, args, ctx) => {
    return await ctx.prisma.users();
  })
};
