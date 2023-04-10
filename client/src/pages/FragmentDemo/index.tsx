import React from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay'
import type { FragmentDemoQuery } from './__generated__/FragmentDemoQuery.graphql'
import AuthorDisplay from './AuthorDisplay';
import _ from 'lodash'

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
    <>
        <h1>Todo</h1>
        <pre>
          <code>{data.todo && JSON.stringify(_.omit(data.todo, ['author']), null, 2)}</code>
        </pre>
        {data?.todo?.author && <AuthorDisplay author={data.todo?.author} />}
    </>
  )
}
