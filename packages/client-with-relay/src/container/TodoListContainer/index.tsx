import React, { useState } from 'react'
import type { PreloadedQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import type { TodoListContainerQuery } from './__generated__/TodoListContainerQuery.graphql'
import { useQueryLoader, usePreloadedQuery } from 'react-relay';
import TodoList from '../../components/TodoList';

const query = graphql`
  query TodoListContainerQuery {
    todos {
      id
      text
      completed
    }
  }
`;

interface TodoLIstContainerDisplayProps {
  todosQueryRef: PreloadedQuery<TodoListContainerQuery, Record<string, unknown>>
}

const TodoLIstContainerDisplay: React.FC<TodoLIstContainerDisplayProps> = ({
  todosQueryRef
}) => {
  const data = usePreloadedQuery<TodoListContainerQuery>(query, todosQueryRef as any);
  return (
    <>
      <TodoList dataSoure={data} />
    </>
  )
}

interface TodoLIstContainerProps {
  initialQueryRef: PreloadedQuery<TodoListContainerQuery> | null
}

export default React.memo<TodoLIstContainerProps>(({
  initialQueryRef
}) => {
  // 使用了 useQueryLoader hook，以确保查询语句已经加载
  const [todosQueryRef, loadTodosQuery] = useQueryLoader(query, initialQueryRef);

  React.useEffect(() => {
    if (!initialQueryRef) {
      loadTodosQuery({});
    }
  }, [initialQueryRef, loadTodosQuery])

  if (!todosQueryRef) return null

  return (
    <React.Suspense fallback={<>Loading...</>}>
      <TodoLIstContainerDisplay todosQueryRef={todosQueryRef} />
    </React.Suspense>
  )
})

