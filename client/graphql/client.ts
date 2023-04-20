import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations,
        )}, Path: ${JSON.stringify(path)}`,
      ),
    );
  if (networkError) {
    console.log(`[Network error]: ${JSON.stringify(networkError)}`);
  }
});

export const apolloClient = () => {
  return new ApolloClient({
    link: from([
      errorLink,
      new HttpLink({
        //uri: process.env.APOLLO_SERVER,
        uri: 'http://localhost:4000/',
      }),
    ]),
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined',
  });
};
