export const event = (body, token) => ({
  headers: {
    Host: 'localhost:3000',
    Connection: 'keep-alive',
    'Content-Length': '1468',
    accept: '*/*',
    Origin: 'http://localhost:3000',
    Authorization: `Bearer ${token}`,
    'X-Apollo-Tracing': '1',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
    'content-type': 'application/json',
    Referer: 'http://localhost:3000/',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8'
  },
  multiValueHeaders: {
    Host: ['localhost:3000'],
    Connection: ['keep-alive'],
    'Content-Length': ['1468'],
    accept: ['*/*'],
    Origin: ['http://localhost:3000'],
    Authorization: [`Bearer ${token}`],
    'User-Agent': [
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
    ],
    'content-type': ['application/json'],
    Referer: ['http://localhost:3000/'],
    'Accept-Encoding': ['gzip, deflate, br'],
    'Accept-Language': ['en-GB,en-US;q=0.9,en;q=0.8']
  },
  path: '/',
  pathParameters: null,
  requestContext: {
    accountId: 'offlineContext_accountId',
    resourceId: 'offlineContext_resourceId',
    apiId: 'offlineContext_apiId',
    requestId: 'offlineContext_requestId_15711280150515705',
    identity: {
      cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
      accountId: 'offlineContext_accountId',
      cognitoIdentityId: 'offlineContext_cognitoIdentityId',
      caller: 'offlineContext_caller',
      apiKey: 'offlineContext_apiKey',
      sourceIp: '127.0.0.1',
      cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
      cognitoAuthenticationProvider: 'offlineContext_cognitoAuthenticationProvider',
      userArn: 'offlineContext_userArn',
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
      user: 'offlineContext_user'
    },
    authorizer: { principalId: 'offlineContext_authorizer_principalId' },
    protocol: 'HTTP/1.1',
    resourcePath: '/',
    httpMethod: 'POST'
  },
  resource: '/',
  httpMethod: 'POST',
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  stageVariables: null,
  body,
  isOffline: true
});
