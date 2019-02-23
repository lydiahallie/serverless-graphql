import { GraphQLServerLambda } from 'graphql-yoga';
import { prisma } from '../prisma/generated/prisma-client';

import typeDefs from './schema';
import resolvers from './resolvers';

const lambda = new GraphQLServerLambda({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    prisma
  })
});

exports.server = lambda.graphqlHandler;
exports.playground = lambda.playgroundHandler;
