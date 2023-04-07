import React from 'react'
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { AuthorDisplayFragment$key } from './__generated__/AuthorDisplayFragment.graphql'

const authorFragment = graphql`
    fragment AuthorDisplayFragment on User {
        id,
        name,
    }
`

interface Props {
    author: AuthorDisplayFragment$key
}

const AuthorDisplay: React.FC<Props> = ({
    author
}) => {
    const data = useFragment(authorFragment, author)
    return <div>
            <p>Author Id: {data?.id}</p>
            <p>Author Name: {data?.name || 'Unknown'}</p>
    </div>;
}
 
export default AuthorDisplay;