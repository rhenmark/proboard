import { ApolloClient, InMemoryCache } from '@apollo/client';

const TOKEN = process.env.CONTENTFUL_SPACE as string
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN as string
const URL = `https://graphql.contentful.com/content/v1/spaces/${TOKEN}`

const client = new ApolloClient({
    uri: URL,
    cache: new InMemoryCache(),
    headers: {
        authorization: `Bearer ${ACCESS_TOKEN}`
    },
})

export default client