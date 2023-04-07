import React from 'react'
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import Todos from './pages/Todos';
import FragmentDemo from './pages/FragmentDemo';
import useRelayEnvironment from './hooks/useRelayEnvironment';
import './App.css';


function App() {
  const environment = useRelayEnvironment()
  const pathname = window.location.pathname
  const routeMap: Record<string, React.ReactNode> = {
    '/todos': <Todos />,
    '/fragment': <FragmentDemo />
  }
  return (
    <RelayEnvironmentProvider environment={environment}>
        {routeMap[pathname] || null}
    </RelayEnvironmentProvider>
  );
}

export default App;
