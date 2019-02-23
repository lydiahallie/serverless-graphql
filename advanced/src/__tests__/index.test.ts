const { GraphQLClient } = require('graphql-request');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const token = jwt.sign({ data: { service: 'prisma-server@dev' } }, process.env.PRISMA_SECRET, {
  expiresIn: '1h'
});

beforeAll(async () => {
  const endpoint = process.env.PRISMA_ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return await graphQLClient.rawRequest(
    `mutation {
      deleteManyUsers(where: {
        email_in: ["test@test.com"]
      }) {
        count
      }
    }`
  );
});

describe('Authentication', () => require('./auth.test'));
