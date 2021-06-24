import { makeExecutableSchema, gql } from 'apollo-server';

import { books } from './resolvers';

import * as types from './types';

const Query = gql`
  type Query {
    books: [Book]
  }
`;

const typeDefs = [Query, ...Object.entries(types).map(e => e[1])];

const resolvers = {
  Query: {
    books,
  },
};

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

export default schema;
export { typeDefs };
