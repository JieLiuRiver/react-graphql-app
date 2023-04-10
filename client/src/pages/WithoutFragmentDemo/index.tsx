import React from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay'
import type { WithoutFragmentDemoQuery } from './__generated__/WithoutFragmentDemoQuery.graphql'
import AuthorDisplay from './AuthorDisplay';

const withoutFragmentDemoQuery = graphql`
  query WithoutFragmentDemoQuery($todoId: ID!) {
    todo(id: $todoId) {
      id
      text
      completed,
      author {
        id,
        name
      }
    }
  }
`;

export default function WithoutFragmentDemo() {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <WithoutFragmentDemoContent />
    </React.Suspense>
  );
}


function WithoutFragmentDemoContent() {
  const data = useLazyLoadQuery<WithoutFragmentDemoQuery>(withoutFragmentDemoQuery, {
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
