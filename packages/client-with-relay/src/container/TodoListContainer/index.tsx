import React from 'react'
import type { PreloadedQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import type { TodoListContainerQuery } from './__generated__/TodoListContainerQuery.graphql'
import { useQueryLoader, usePreloadedQuery } from 'react-relay';
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

export default React.memo<TodoLIstContainerProps>(({
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
      <TodoListContainerDisplay
        todosQueryRef={todosQueryRef}
        query={query}
      />
    </React.Suspense>
  )
})

