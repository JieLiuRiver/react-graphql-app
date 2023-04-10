import React from 'react'
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import TodoList from './pages/TodoList';
import FragmentDemo from './pages/FragmentDemo';
import FetchQueryDemo from './pages/FetchQueryDemo';
import WithoutFragmentDemo from './pages/WithoutFragmentDemo';
import useRelayEnvironment from './hooks/useRelayEnvironment';
import './App.css';

const Menus: React.FC<{
  data: string[]
}> = ({data}) => <>
  <h1>Hello, Relay & GraphQL</h1>
  <ul>
    {data.map((menu) => (<li key={menu}><a href={menu}>{menu.slice(1)}</a></li>))}
  </ul>
</>


function App() {
  const environment = useRelayEnvironment()
  const pathname = window.location.pathname

  const routeMap: Record<string, React.ReactNode> = {
    '/todo-list': <TodoList />,
    '/without-fragment': <WithoutFragmentDemo />,
    '/with-fragment': <FragmentDemo />,
    '/fetch-query': <FetchQueryDemo />,
  }

  return (
    <RelayEnvironmentProvider environment={environment}>
        <a href="/">back home</a> <br/>
        <Menus data={Object.keys(routeMap)} />
        {routeMap[pathname] || null}
    </RelayEnvironmentProvider>
  );
}

export default App;
