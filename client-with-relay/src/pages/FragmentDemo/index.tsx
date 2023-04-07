import React from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay'
import { FragmentDemoQuery } from './__generated__/FragmentDemoQuery.graphql'
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
    <div className="sidebar">
      <React.Suspense fallback={<p>Loading...</p>}>
        <FragmentDemoContent />
      </React.Suspense>
    </div>
  );
}


function FragmentDemoContent() {
  const data = useLazyLoadQuery<FragmentDemoQuery>(fragmentDemoQuery, {
    todoId: '1',
  })
  return (
    <>
        <p>ID: {data.todo?.id || ''}</p>
        <p>Name: {data.todo?.text || ''}</p>
        <p>Todo Completed: {data.todo?.completed ? 'Yes' : 'No'}</p>
        {data.todo?.author && <AuthorDisplay author={data.todo?.author} />}
    </>
  )
}
