

import { Environment, Store, RecordSource, Network } from 'relay-runtime';
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';

export default function useRelayEnvironment () {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql'
  });
  
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  
  const network = Network.create((operation, variables) => {
    return new Promise((resolve, reject) => {
      switch (operation.operationKind) {
        case 'query':
          client.query({
            query: gql`${operation.text}`,
            variables,
          })
            .then((result) => {
              resolve(result as any);
            })
            .catch((error) => {
              reject(error);
            });
          break;
        case 'mutation':
          client.mutate({
            mutation: gql`${operation.text}`,
            variables,
          })
            .then((result) => {
              resolve(result as any);
            })
            .catch((error) => {
              reject(error);
            });
          break;
        default:
          break;
      }
    });
  });
  
  const environment = new Environment({
    network,
    store: new Store(new RecordSource()),
  });

  return environment
}