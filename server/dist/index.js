import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv';
import typeDefs from '../dist/graphql/typeDefs/typeDefs.js';
import resolvers from '../dist/graphql/resolvers/resolvers.js';
import db from '../dist/config/db.js';

dotenv.config();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
db();
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
