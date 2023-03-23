import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv';
import typeDefs from './graphql/typeDefs/typeDefs';
import resolvers from './graphql/resolvers/resolvers';
import db from './config/db';

dotenv.config();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

db();
const standAloneServer = async () => {
  return await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
};
standAloneServer();

console.log(`🚀  Server is READY!`);
