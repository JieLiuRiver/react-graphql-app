import React from 'react'
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import TodoList from './pages/TodoList';
import FragmentDemo from './pages/FragmentDemo';
import WithoutFragmentDemo from './pages/WithoutFragmentDemo';
import useRelayEnvironment from './hooks/useRelayEnvironment';
import './App.css';

const Home = () => <>
  <h1>Hello, Relay & GraphQL</h1>
  <ul>
    <li><a href="/todo-list">todo-list</a></li>
    <li><a href="/without-fragment">without-fragment</a></li>
    <li><a href="/with-fragment">with-fragment</a></li>
  </ul>
</>


function App() {
  const environment = useRelayEnvironment()
  const pathname = window.location.pathname

  const routeMap: Record<string, React.ReactNode> = {
    '/': <Home />,
    '/todo-list': <TodoList />,
    '/without-fragment': <WithoutFragmentDemo />,
    '/with-fragment': <FragmentDemo />,
  }

  return (
    <RelayEnvironmentProvider environment={environment}>
        {routeMap[pathname] || null}
    </RelayEnvironmentProvider>
  );
}

export default App;
