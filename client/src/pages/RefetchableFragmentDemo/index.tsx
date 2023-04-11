import React from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay'
import type { RefetchableFragmentDemoQuery } from './__generated__/RefetchableFragmentDemoQuery.graphql'
import AuthorDisplay from './RefreshAuthorDisplay';
import _ from 'lodash'

const fragmentDemoQuery = graphql`
  query RefetchableFragmentDemoQuery($todoId: ID!) {
    todo(id: $todoId) {
      id
      text
      completed,
      author {
        ...RefreshAuthorDisplayFragment
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
  const data = useLazyLoadQuery<RefetchableFragmentDemoQuery>(fragmentDemoQuery, {
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
