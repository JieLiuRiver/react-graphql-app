import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import Todos from './pages/Todos';
import MergeQuery from './pages/MergeQuery';
import useRelayEnvironment from './hooks/useRelayEnvironment';
import './App.css';

function App() {
  const environment = useRelayEnvironment()
  return (
    <RelayEnvironmentProvider environment={environment}>
      <BrowserRouter>
        <Route path="/todos" component={Todos} />
        <Route path="/merge-query" component={MergeQuery} />
        <Redirect to="/todos" />
      </BrowserRouter>
    </RelayEnvironmentProvider>
  );
}

export default App;
