import { ApolloClient } from "@apollo/client";
import { Container } from 'typedi';

import { ApolloClientBuilderService } from './core/graphql/apollo-client-builder.service';


export function configure() {
    const baseUrl = " https://tq-template-server-sample.herokuapp.com/graphql";
    configApolloClient(baseUrl);
}

function configApolloClient(url:string){
    const client = Container.get(ApolloClientBuilderService).build(url);
    Container.set(ApolloClient, client);
}