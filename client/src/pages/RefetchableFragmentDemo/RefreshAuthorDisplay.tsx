import React from 'react';
import { useRefetchableFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import type { RefreshAuthorDisplayFragment$key } from './__generated__/RefreshAuthorDisplayFragment.graphql';

const authorFragment = graphql`
  fragment RefreshAuthorDisplayFragment on User @refetchable(queryName: "RefreshAuthorDisplayRefetchQuery") {
    id
    name
  }
`;

interface Props {
  author: RefreshAuthorDisplayFragment$key;
}

const AuthorDisplay: React.FC<Props> = ({
  author
}) => {
  const [data, refetch] = useRefetchableFragment(
    authorFragment,
    author
  );
  return (
    <>
      <h2>Author</h2>
      <button onClick={() => {
        refetch({}, {
          fetchPolicy: 'network-only'
        });
      }}>refresh</button>
      <pre>
        <code>{data && JSON.stringify(data, null, 2)}</code>
      </pre>
    </>
  );
};

export default AuthorDisplay;
