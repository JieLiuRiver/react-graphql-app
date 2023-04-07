import React from 'react'
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import type { AuthorDisplayFragment$key } from './__generated__/AuthorDisplayFragment.graphql'

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
    return <ul>
            <li>Author Id: {data?.id}</li>
            <li>Author Name: {data?.name || 'Unknown'}</li>
    </ul>;
}
 
export default AuthorDisplay;


/*
1. 重用 Fragment：使用 Fragment 可以将数据属性集合定义为单独的部分，这样可以在应用程序中重用它们。在多个组件中使用相同的 Fragment 可以避免重复的代码，并使应用程序更易于维护。

2. 精确控制数据：使用 useFragment 钩子时，只会获取与 Fragment 中定义的属性相对应的数据，这可以防止在组件中获取不必要的数据，从而提高了应用程序的性能。

3. 保持代码清晰：使用 Fragment 和 useFragment 钩子可以使应用程序中的代码更加清晰和易于理解。通过将数据的声明和使用分离，代码变得更加模块化，易于测试和维护。
*/