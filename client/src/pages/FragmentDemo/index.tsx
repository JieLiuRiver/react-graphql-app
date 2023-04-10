import React from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay'
import type { FragmentDemoQuery } from './__generated__/FragmentDemoQuery.graphql'
import AuthorDisplay from './AuthorDisplay';

const fragmentDemoQuery = graphql`
  query FragmentDemoQuery($todoId: ID!) {
    todo(id: $todoId) {
      id
      text
      completed,
      author {
        ...AuthorDisplayFragment
      }
    }
  }
`;

export default function FragmentDemo() {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <FragmentDemoContent />
    </React.Suspense>
  );
}


function FragmentDemoContent() {
  const data = useLazyLoadQuery<FragmentDemoQuery>(fragmentDemoQuery, {
    todoId: '1',
  })
  return (
    <ul>
        <li>ID: {data.todo?.id || ''}</li>
        <li>Name: {data.todo?.text || ''}</li>
        <li>Todo Completed: {data.todo?.completed ? 'Yes' : 'No'}</li>
        {data.todo?.author && <AuthorDisplay author={data.todo?.author} />}
    </ul>
  )
}
