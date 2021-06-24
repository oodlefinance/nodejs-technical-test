import { makeExecutableSchema, gql } from 'apollo-server';

import { getPoliceForce, getPoliceForces } from './resolvers';

const types = gql`
   type EngagementMethod {
    url: String
    type: String
    description: String
    title: String
  }

  type PoliceForce {
    id: ID
    description: String
    url: String
    engagement_methods: [EngagementMethod]
    telephone: String
    name: String
  }

  type BasicPoliceForceInfo {
    id: ID
    name: String
  }
`;

const Query = gql`
  type Query {
    getPoliceForce(id: ID): PoliceForce
    getPoliceForces: [BasicPoliceForceInfo]
  }
`;

const typeDefs = [Query, types];

const resolvers = {
  Query: {
    getPoliceForce,
    getPoliceForces,
  },
};

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

export default schema;
export { typeDefs };
