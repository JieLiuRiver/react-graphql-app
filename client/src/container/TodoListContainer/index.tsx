import React from 'react'
import type { PreloadedQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import type { TodoListContainerQuery } from './__generated__/TodoListContainerQuery.graphql'
import { useQueryLoader } from 'react-relay';
import { Button } from '@mui/material'
import TodoListContainerDisplay from './ContainerDisplay';

const query = graphql`
  query TodoListContainerQuery {
    todo {
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
  const [todoQueryRef, loadTodoQuery] = useQueryLoader(query, initialQueryRef);

  React.useEffect(() => {
    console.log('hello')
    if (!initialQueryRef) {
      loadTodoQuery({});
    }
  }, [initialQueryRef, loadTodoQuery])

  if (!todoQueryRef) return null

  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Button size="small" onClick={() => {
        // TODO： why it doest not work?
        loadTodoQuery({}, { fetchPolicy: 'network-only' });
      }}>Refresh</Button>
      <TodoListContainerDisplay
        todoQueryRef={todoQueryRef}
        query={query}
      />
    </React.Suspense>
  )
}

export default TodoListContainer