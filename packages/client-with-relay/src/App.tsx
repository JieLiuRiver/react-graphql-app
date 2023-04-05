import { RelayEnvironmentProvider } from 'react-relay/hooks';
import Todos from './pages/Todos';
import MergeQuery from './pages/MergeQuery';
import useRelayEnvironment from './hooks/useRelayEnvironment';
import './App.css';

function App() {
  const environment = useRelayEnvironment()
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Todos />
      <MergeQuery />
    </RelayEnvironmentProvider>
  );
}

export default App;
