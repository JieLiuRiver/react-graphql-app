import React from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay'
import type { WithoutFragmentDemoQuery } from './__generated__/WithoutFragmentDemoQuery.graphql'
import AuthorDisplay from './AuthorDisplay';
import _ from 'lodash'

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
    <>
      <h1>Todo</h1>
      <pre>
        <code>{data.todo && JSON.stringify(_.omit(data.todo, ['author']), null, 2)}</code>
      </pre>
      {data.todo?.author && <AuthorDisplay author={data.todo?.author} />}
    </>
  )
}
