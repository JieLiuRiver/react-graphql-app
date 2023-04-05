import React from 'react'
import type { PreloadedQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import type { TodoListContainerQuery } from './__generated__/TodoListContainerQuery.graphql'
import { useQueryLoader } from 'react-relay';
import { Button } from '@mui/material'
import TodoListContainerDisplay from './ContainerDisplay';

const query = graphql`
  query TodoListContainerQuery {
    todos {
      id
      text
      completed
    }
  }
`;

interface TodoLIstContainerProps {
  initialQueryRef: PreloadedQuery<TodoListContainerQuery> | null
}

const TodoListContainer: React.FC<TodoLIstContainerProps> = ({
  initialQueryRef
}) => {
  const [todosQueryRef, loadTodosQuery] = useQueryLoader(query, initialQueryRef);

  React.useEffect(() => {
    if (!initialQueryRef) {
      loadTodosQuery({});
    }
  }, [initialQueryRef, loadTodosQuery])

  if (!todosQueryRef) return null

  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Button size="small" onClick={() => {
        // TODO： why it doest not work?
        loadTodosQuery({}, { networkCacheConfig: { force: true } });
      }}>Refresh</Button>
      <TodoListContainerDisplay
        todosQueryRef={todosQueryRef}
        query={query}
      />
    </React.Suspense>
  )
}

export default TodoListContainer