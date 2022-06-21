import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oi6q0k04w401xx7zl923vs/master',
    cache: new InMemoryCache()
})