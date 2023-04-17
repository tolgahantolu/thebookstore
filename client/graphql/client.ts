import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const apolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.APOLLO_SERVER,
    }),
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined',
  });
};
