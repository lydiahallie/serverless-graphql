import Query from './Query';
import { auth } from './Mutation/auth';

export default {
  Query,
  Mutation: {
    ...auth
  }
};
