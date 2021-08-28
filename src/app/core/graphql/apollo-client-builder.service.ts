import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { Service } from 'typedi';

@Service()
export class ApolloClientBuilderService{
    build(url:string): ApolloClient<NormalizedCacheObject> {
        const link = createHttpLink({uri: url + '/graphql'});

        const client = new ApolloClient({
            link,
            cache: new InMemoryCache(),
        });

        return client;
    
    }
}