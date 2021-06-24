const { ApolloServer } = require('apollo-server');

import schema from './schema';

const server = new ApolloServer({ 
  schema,
  introspection: true, 
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
