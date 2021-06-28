import { ApolloServer } from 'apollo-server';

import PoliceForcesAPI from './dataSources/PoliceForcesAPI.js';
import schema from './schema';

const server = new ApolloServer({ 
  dataSources: () => {
    return {
      PoliceForcesAPI: new PoliceForcesAPI(),
    };
  },
  schema,
  introspection: true, 
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
