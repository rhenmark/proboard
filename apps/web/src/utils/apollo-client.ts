import { ApolloClient, InMemoryCache } from '@apollo/client';

const TOKEN = process.env.CONTENTFUL_SPACE as string;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN as string;
const URL = `https://graphql.contentful.com/content/v1/spaces/${TOKEN}`;

const client = new ApolloClient({
  uri: URL,
  ssrMode: false,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${ACCESS_TOKEN}`,
  },
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
  },
});

export default client;
