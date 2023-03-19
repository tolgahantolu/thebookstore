import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv';
import typeDefs from '../server/graphql/typeDefs/typeDefs.ts';
import resolvers from '../server/graphql/resolvers/resolvers.ts';
import db from '../server/config/db.ts';

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
