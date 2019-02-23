import { verify } from 'jsonwebtoken';
require('dotenv').config();

import { slsInvoke } from '../../utils/tests/invokeLocal';
import Body from '../../utils/tests/body';

let token = '';

describe('Authentication', async () => {
  test('user can sign up and receive a token', async () => {
    const mutation = new Body(
      `mutation {
        signup(
          firstName: "John"
          lastName: "Doe"
          email: "test@test.com"
          password: "123123"
        ) {
          token
        }
      }`
    ).getJson();

    const res = await slsInvoke(mutation);
    expect(typeof res.body.data.signup.token).toBe('string');
  });

  test('user can log in and receive a token', async () => {
    const mutation = new Body(
      `mutation { 
        login(
          email: "test@test.com" 
          password: "123123"
        ) { 
          token 
        } 
      }`
    ).getJson();

    const res = await slsInvoke(mutation);
    token = res.body.data.login.token;

    expect(typeof res.body.data.login.token).toBe('string');
  });

  test('token is valid', async () => {
    const verifiedToken = await verify(token, process.env.JWT_SECRET);
    expect(typeof verifiedToken.id).toBe('string');
  });

  test('user cannot sign up with existing email', async () => {
    token = '';
    const mutation = new Body(
      `mutation {
        signup(
          firstName: "John"
          lastName: "Doe"
          email: "test@test.com"
          password: "123123"
        ) {
          token
        }
      }`
    ).getJson();

    await slsInvoke(mutation).catch(e => {
      expect(e.response.errors).toBeTruthy();
    });
  });

  test('user cannot log in with wrong credentials', async () => {
    const mutation = new Body(
      `mutation {
        login(
          email: "test@test.com"
          password: "123"
        ) {
          token
        }
      }`
    ).getJson();

    await slsInvoke(mutation).catch(e => {
      expect(e.response.errors).toBeTruthy();
    });
  });

  test('user cannot log in with nonexistent email', async () => {
    const mutation = new Body(
      `mutation {
        login(
          email: "randomemail@test.com"
          password: "123123"
        ) {
          token
        }
      }`
    ).getJson();

    await slsInvoke(mutation).catch(e => {
      expect(e.response.errors).toBeTruthy();
    });
  });
});
