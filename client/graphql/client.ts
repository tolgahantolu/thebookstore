import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const apolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:4000/',
    }),
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined',
  });
};
