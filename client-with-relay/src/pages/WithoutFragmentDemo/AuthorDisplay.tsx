import React from 'react'

interface Props {
    author: any
}

const AuthorDisplay: React.FC<Props> = ({
    author
}) => {
    return <ul>
            <li>Author Id: {author?.id}</li>
            <li>Author Name: {author?.name || 'Unknown'}</li>
    </ul>;
}
 
export default AuthorDisplay;