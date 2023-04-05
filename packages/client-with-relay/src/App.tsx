import { BrowserRouter, Route, Link } from 'react-router-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
// import { graphql } from 'babel-plugin-relay/macro';
import { Environment, Store, RecordSource, Network } from 'relay-runtime';
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
// import { RelayNetworkLayer } from 'react-relay-network-modern';
import Todos from './pages/Todos';
import './App.css';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const network = Network.create((operation, variables) => {
  return new Promise((resolve, reject) => {
    client
      .query({
        query: gql`${operation.text}`,
        variables,
      })
      .then((result) => {
        resolve(result as any);
      })
      .catch((error) => {
        reject(error);
      });
  });
});

const environment = new Environment({
  network,
  store: new Store(new RecordSource()),
});

function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <BrowserRouter>
        <h1>Hello, Relay & GraphQL</h1>
        <nav>
          <ul>
            <li><Link to="/todos">Todos</Link></li>
          </ul>
        </nav>

        <Route path="/todos" component={Todos} />
        {/* <Route path="/contact" component={Contact} /> */}
      </BrowserRouter>
    </RelayEnvironmentProvider>
  );
}

export default App;
