import React from 'react'

interface Props {
    author: any
}

const AuthorDisplay: React.FC<Props> = ({
    author
}) => {
    return <>
        <h2>Author</h2>
        <pre>
            <code>{author && JSON.stringify(author, null, 2)}</code>
        </pre>
    </>;
}
 
export default AuthorDisplay;